import React, { Component } from 'react';
import { Image,
         StyleSheet, 
         Text, 
         View,
        ImageBackground, 
        TextInput,
        Dimensions,
        TouchableOpacity,
        ScrollView} from 'react-native';
import bgImage from '../assets/img_sistema/fondo_login.jpg';
import lgLogin from '../assets/img_sistema/login_img.png';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';

//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example
import moment from 'moment';

import { createStackNavigator } from 'react-navigation-stack';

import { createAppContainer } from 'react-navigation';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const {width: WIDTH} = Dimensions.get('window')


export  class TestYesavage extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
          nombreUsuario: "",
          unidadAtencion: "",
          zona: "",
          distrito: "",
          modalidad: "",
          anio: "",
          meses: "",
          aplicadoPor: "",
          date: null, dt: null, registrationDate: '',
          //Ver y ocultar clave
          showPass: true,
          press: false
    }
  }
  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str =
        num > parseInt(max.toString().charAt(0)) && num.toString().length == 1
          ? '0' + num
          : num.toString();
    }
    return str;
  }
  dateTimeInputChangeHandler = (e) => {
    this.type = 'text';
    var input = e;
    var expr = new RegExp(/\D\/$/);
    if (expr.test(input)) input = input.substr(0, input.length - 3);
    var values = input.split('/').map(function (v) {
      return v.replace(/\D/g, '');
    });
    if (values[1]) values[1] = this.checkValue(values[1], 12);
    if (values[0]) values[0] = this.checkValue(values[0], 31);
    var output = values.map(function (v, i) {
      return v.length == 2 && i < 2 ? v + '/' : v;
    });
    this.setState({
      registrationDate: output.join('').substr(0, 14),
    });
  };
  registroUsuario = () => {
    //alert('OK');
    const {nombreUsuario} = this.state;
    const {unidadAtencion} = this.state;
    const {zona} = this.state;
    const {distrito} = this.state;
    const {modalidad} = this.state;
    const {anio} = this.state;
    const {meses} = this.state;
    const {aplicadoPor} = this.state;

    fetch('http://192.168.1.3/pruebas_react/registrarse.php', {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        nombreUsuario: nombreUsuario,
        unidadAtencion: unidadAtencion,
        zona: zona,
        distrito: distrito,
        modalidad: modalidad,
        anio: anio,
        meses: meses,
        aplicadoPor: aplicadoPor,
      })

    }).then((response) => response.json())
      .then((responseJson) =>{
        alert(responseJson);
      }).catch((error)=>{
        console.log(error);
      });

  }

  showPass = () => {
    if(this.state.press == false){
      this.setState({showPass : false, press: true })
    }else{
      this.setState({showPass : true, press: false })
    }
  }


  render(){

    const [isTimerStart, setIsTimerStart] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [timerDuration, setTimerDuration] = useState(90000);
    const [resetTimer, setResetTimer] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    
    return (
      <ScrollView style={styles.scrollView}>
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={lgLogin} style={styles.logoLogin} />
        </View>
        <View tyle={styles.tituloContainer}>
            <Text style={styles.TituloLogin}>Escala de Yesavage</Text> 
        </View>
        <View tyle={styles.titulLabel}>
            <Text style={styles.TextInfo}>Screening de Depresion</Text>
        </View>
        <View tyle={styles.titulLabel}>
            <Text style={styles.TextInfo}>FICHA N° 3d</Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Nombre del usuario'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {nombreUsuario => this.setState({nombreUsuario})}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon name={'md-school'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Nombre de la Unidad de Atención'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {unidadAtencion => this.setState({unidadAtencion})}
          />
        </View>
        <View style={styles.inputContainer1}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'90%'}}>
          <View>
          <Icon name={'ios-pin'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon1}/>
          <TextInput
            style={styles.loginBtn1}  
            placeholder={'Zona'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {zona => this.setState({zona})}
          />
          </View>
          <View>
          <Icon name={'ios-locate'} size={30} color={'rgba(0,0,0,1)'}
          style={styles.inputIcon1}/>
          <TextInput
            style={styles.loginBtn1}  
            placeholder={'Distrito'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {distrito => this.setState({distrito})}
          />
          </View>
          </View>
          </View>
       
        <View style={styles.inputContainer}>
          <Icon name={'ios-time'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Modalidad de Atención'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {modalidad => this.setState({modalidad})}
          />
        </View>
        <View tyle={styles.tituloLabel}>
            <Text style={styles.labelEdad}>Edad</Text>
        </View>
        <View style={styles.inputContainer1}>
        <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'90%'}}>
          <View>
          <Icon name={'md-time'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon1}/>
          <TextInput
            style={styles.loginBtn1}  
            placeholder={'Años'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {anio => this.setState({anio})}
          />
          </View>
          <View>
          <Icon name={'ios-today'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon1}/>
          <TextInput
            style={styles.loginBtn1}  
            placeholder={'Meses'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {meses => this.setState({meses})}
          />
          </View>
          </View>
          </View>
       
          <View style={styles.inputContainer}>
          <Icon name={'ios-calendar'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIconDate2}/>
         <DatePicker
          
              showIcon={false}
              androidMode="spinner"
            
              date={this.state.date}
              mode="date"
              placeholder="Fecha de aplicación"
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              //underlineColorAndroid='transparent'
              format="DD-MM-YYYY"
              maxDate={moment().format('DD-MM-YYYY')}
              confirmBtnText="Chọn"
              cancelBtnText="Hủy"
              customStyles={{
                dateInput: {
                  marginTop: 0,
                 
                  width: WIDTH - 55,
                  height: 45,
                  borderRadius: 45,
                  fontSize: 15,
                  backgroundColor: 'rgba(0,0,0,0.35)',
                  color: 'rgba(255,255,255,1)',
                },
              }}
              onDateChange={(date) => {
                this.setState({ date: date });
              }}
            />
        </View>
     

        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={30} color={'rgba(0,0,0,1)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}  
            placeholder={'Aplicado por'}
            placeholderTextColor={'rgba(0,0,0,0.7)'}
            underlineColorAndroid='transparent'
            onChangeText= {aplicadoPor => this.setState({aplicadoPor})}
          />
        </View>
        <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            //To start
            reset={resetStopwatch}
            //To reset
            options={options}
            //options for the styling
            getTime={(time) => {
              console.log(time);
            }}
          />
        <TouchableOpacity style={styles.btnRegistrar} 
        
        onPress={() => 
         this.props.navigation.navigate('Formularioye',{
          setIsStopwatchStart(isStopwatchStart)
          })}>
          <Text style={styles.text}>Siguiente</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCancelar} onPress={() => this.props.navigation.navigate('Yesavage')}>
          <Text style={styles.text}>Regresar</Text>
        </TouchableOpacity>
      </ImageBackground>
      </ScrollView>
    );
  }

  
};
export default TestYesavage;

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
     // backgroundColor: 'pink',
      marginBottom: 0,
    },
    logoContainer:{
      alignItems: 'center',
      marginBottom: 0,
      marginTop: 70,
    },
    logoLogin: {
      
      height: 150 
    },
    tituloContainer:{
      alignItems: 'center',
      marginBottom: 50 
    },
    tituloLabel:{
        alignItems: 'stretch',
        marginBottom: 50 
      },
    TituloLogin: {
      color: 'black',
      fontSize: 33,
      fontWeight: 'bold',
      marginTop: 0,
      opacity: 0.5
    },
    inputIconDate2: {
      position: 'absolute',
      top: 5,
      left: 15,
    },
    inputContainer1: {
      marginTop: 10,
      paddingRight: 5,
      paddingLeft: 5,
    },
    loginBtn1:{
      width:150,
      backgroundColor:'rgba(0,0,0,0.35)',
      borderRadius:45,
      fontSize: 16,
      height:45,
      alignItems:"center",
      paddingLeft: 45,
      marginTop:0,
      flexDirection: 'row',
      marginBottom:3,
    },
    inputIcon1: {
      position: 'absolute', 
      top: 7,
      left: 11,
    },
    TextInfo: {
        color: 'black',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 0,
        opacity: 0.5
      },
    labelEdad:{
     color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 5,
      //opacity: 0.5
    textAlign: 'left',
    },
    inputContainer: {
      marginTop: 10
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0,0,0,0.35)',
      color: 'rgba(255,255,255,1)',
      marginHorizontal: 25,
  
    },
    inputIcon: {
      position: 'absolute', 
      top: 8,
      left: 37,
    },
    btnEye: {
      position: 'absolute', 
      top: 8,
      right: 37,
    },
    forgot:{
      color:'rgba(0,0,0,1)',
      fontSize:18,
      paddingTop: 20,
    },
    btnRegistrar: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      backgroundColor: '#005DA6',
      justifyContent: 'center',
      marginTop: 20,
    },
    btnCancelar: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 45,
      marginBottom: 20,
      backgroundColor: '#E74C3C',
      justifyContent: 'center',
      marginTop: 20,
    },
    text: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
    }
  });