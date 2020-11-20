import React, { Component, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
  TouchableOpacity, ScrollView
} from 'react-native';
import bgImage from '../assets/img_sistema/fondo_login.jpg';
import lgLogin from '../assets/img_sistema/login_img.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { createStackNavigator } from 'react-navigation-stack';
import { TextInputMask } from 'react-native-masked-text';
import DatePicker from 'react-native-datepicker';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example

import { createAppContainer } from 'react-navigation';
const { width: WIDTH } = Dimensions.get('window')


export class Yesavage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nombresApellidos: "",
      cedula: "",
      telefono: "",
      correo: "",
      usuario: "",
      clave: "",
      checked: '',
      checked1: '',
      checked2: '',
      checked3: '',
      checked4: '',
      checked5: '',
      checked6: '',
      checked7: '',
      checked8: '',
      checked9: '',
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
    const { nombresApellidos } = this.state;
    const { cedula } = this.state;
    const { telefono } = this.state;
    const { correo } = this.state;
    const { usuario } = this.state;
    const { clave } = this.state;

    fetch('http://192.168.1.3/pruebas_react/registrarse.php', {
      method: 'POST',
      headers: {
        'Accept': 'Application/json',
        'Content-type': 'Application/json'
      },
      body: JSON.stringify({
        nombresApellidos: nombresApellidos,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        usuario: usuario,
        clave: clave
      })

    }).then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      }).catch((error) => {
        console.log(error);
      });

  }
  
  showPass = () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  
  render() {
    const { checked } = this.state;
    const { checked1 } = this.state;
    const { checked2 } = this.state;
    const { checked3 } = this.state;
    const { checked4 } = this.state;
    const { checked5 } = this.state;
    const { checked6 } = this.state;
    const { checked7 } = this.state;
    const { checked8 } = this.state;
    const { checked9 } = this.state;
  
    
 
   
    return (
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={lgLogin} style={styles.logoLogin} />
          </View>
          <View style={styles.tituloContainer}>
            <Text style={styles.TituloLogin}>Instructivo</Text>
          </View>
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>Puntuación total: 
             <Text style={styles.hombre}> 15 </Text>puntos</Text>
          </View>
         
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>Puntos de cortes:
            </Text>
          </View>
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>No depresión:
            <Text style={styles.mujer}> 0 </Text> - 
             <Text style={styles.hombre}> 5 </Text> puntos
            </Text>
          </View>
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>Probable depresión: 
            <Text style={styles.mujer}> 6 </Text> - 
             <Text style={styles.hombre}> 9</Text> puntos
            </Text>
          </View>
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>Depresión establecida: 
            <Text style={styles.mujer}> 10 </Text> -
             <Text style={styles.hombre}> 15 </Text> puntos
            </Text>
          </View>
        
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>Tiempo de administración: 
            <Text style={styles.mujer}>10 </Text> - 
             <Text style={styles.hombre}> 15 </Text>minutos</Text>
          </View>
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>Normas de aplicación</Text>
          </View>
          <View style={styles.tituloLabel}>
            <Text style={styles.TextInfo}>El evaluador lee las preguntas al paciente sin realizar interpretaciones de los ítems y dejando claro al paciente que la respuesta no debe ser muy meditada. Las respuesta debe ser si o "no" y debe referirse a cómo se ha sentido el paciente la semana anterior.</Text>
          </View>
        
          <TouchableOpacity style={styles.btnRegistrar}
           
            onPress={() => this.props.navigation.navigate('TestYesavage')}>
            <Text style={styles.text}>Siguiente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancelar} onPress={() =>  this.props.navigation.navigate('Test')}>
            <Text style={styles.text}>Cancelar</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }
};
export default Yesavage;

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
    //marginBottom : 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 70,
  },
  logoLogin: {
    height: 150
  },
  tituloContainer: {
    alignItems: 'center',
    marginBottom: 0
  },
  tituloLabel: {
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 30,
    marginTop: 0,

  },
  TituloLogin: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    justifyContent: 'center',
  },
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },

  TextInfo: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'justify',
  },
  mujer:{
    color:'red',
  },
  hombre:{
    color:'blue',
  },
  TextRadio: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    textAlign: 'justify',
  },
  label: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 0,
    //opacity: 0.5
    textAlign: 'left',
  },
  inputContainer: {
    marginTop: 10
  },
  radioButton: {
    paddingLeft: 35,
    paddingRight: 35,
    textAlign: 'justify',
    marginTop: 0,
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
  inputIconDate: {
    position: 'absolute',
    top: 5,
    left: 15,
  },
  inputIconDate2: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  btnEye: {
    position: 'absolute',
    top: 85,
    right: 37,
  },
  forgot: {
    color: 'rgba(0,0,0,1)',
    fontSize: 18,
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
    color: '#ffff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});