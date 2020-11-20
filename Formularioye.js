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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInputMask } from 'react-native-masked-text';
import DatePicker from 'react-native-datepicker';
//import DatePicker from '@react-native-community/datetimepicker';
//https://snack.expo.io/@phattran1201/date-picker-example
import moment from 'moment';
const { width: WIDTH } = Dimensions.get('window')


export class Formularioye extends React.Component {

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
      checked10: '',
      checked11: '',
      checked12: '',
      checked13: '',
      checked14: '',
      datetimeStart:null,

      //Ver y ocultar clave
      showPass: true,
      press: false
    }

  }
  componentSidMount(){
    this.setState({datetimeStart: new Date()})
  }
  renderQuestions()
  {
    
    return (<>
      list_questions.map((i,k) = {
        <>
          <View key={k} style={styles.tituloLabel}>
          <Text style={styles.label}>{k}. {i.question}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
                onValueChange={(v) => { this.setState({ checked1: v }) }} >
                <View style={{ flexDirection: 'row' }}>
                  {
                    i.alternatives.map((j,l) =>(
                        <>
                        <View>
                        <RadioButton
                          status={cj.status}
                          onPress={(val) => {j.status =val }}
                        />
                      </View>
                      <Text style={styles.TextRadio}>j.name</Text>
                        </>
                    ))
                  }
                </View>
              </RadioButton.Group>
            </View>    
      </>
      }
      </>)
      
  }


  registroUsuario = () => {
    //alert('OK');
    const { nombresApellidos } = this.state;
    const { cedula } = this.state;
    const { telefono } = this.state;
    const { correo } = this.state;
    const { usuario } = this.state;
    const { clave } = this.state;

    fetch('http://192.168.100.15/pruebas_react/registrarse.php', {
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
    const { checked10 } = this.state;
    const { checked11 } = this.state;
    const { checked12 } = this.state;
    const { checked13 } = this.state;
    const { checked14 } = this.state;

// Guardo el inicio
let start = new Date().getTime(),
    output = 0 
for (let i = 1; i <= 1024*1024; i++) {
  output += Math.random()
}
// Guardo el final
let end = new Date().getTime()
// Calculo la diferencia
console.log(end - start) 


  
    return (
      <ScrollView style={styles.scrollView}>
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <Image source={lgLogin} style={styles.logoLogin} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.TituloLogin}>Intrucciones</Text>
          </View>
          <View style={styles.subtitulo}>
            <Text style={styles.TextInfoSub}>Responda cada una de las siguientes preguntas según como se ha sentido Ud. durante la última semana.</Text>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>1. ¿Está Ud. básicamente satisfecho con su vida?</Text>
          </View>

          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="uno"
                    status={checked === 'uno' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'uno' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="dos"
                    status={checked === 'dos' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: 'dos' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>2. ¿Ha disminuido o abandonado muchos de sus intereses o actividades previas?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked1: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="tres"
                    status={checked1 === 'tres' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked1: 'tres' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="cuatro"
                    status={checked1 === 'cuatro' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked1: 'cuatro' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>3. ¿Siente que su vida está vacía?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked2: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="cinco"
                    status={checked2 === 'cinco' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked2: 'cinco' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="seis"
                    status={checked2 === 'seis' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked2: 'seis' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>4. ¿Se siente aburrido frecuentemente?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked3: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="siete"
                    status={checked3 === 'siete' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked3: 'siete' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="ocho"
                    status={checked3 === 'ocho' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked3: 'ocho' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>5. ¿Está Ud. de buen ánimo la mayoría del tiempo?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked4: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="nueve"
                    status={checked4 === 'nueve' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked4: 'nueve' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="diez"
                    status={checked4 === 'diez' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked4: 'diez' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>6. ¿Está preocupado o teme que algo malo le va a pasar?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked5: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="once"
                    status={checked5 === 'once' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked5: 'once' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="doce"
                    status={checked5 === 'doce' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked5: 'doce' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>7. ¿Se siente feliz la mayor parte del tiempo?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked6: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="trece"
                    status={checked6 === 'trece' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked6: 'trece' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="catorce"
                    status={checked6 === 'catorce' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked6: 'catorce' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>8. ¿Se siente con frecuencia desamparado?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked7: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="quince"
                    status={checked7 === 'quince' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked7: 'quince' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="dieciseis"
                    status={checked7 === 'dieciseis' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked7: 'dieciseis' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>9. ¿Prefiere Ud. quedarse en casa a salir a hacer cosas nuevas?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked8: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="diecisiete"
                    status={checked8 === 'diecisiete' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked8: 'diecisiete' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="dieciocho"
                    status={checked8 === 'dieciocho' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked8: 'dieciocho' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>10. ¿Siente Ud. que tiene más problemas con su memoria que otras personas de su edad?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked9: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="diecinueve"
                    status={checked9 === 'diecinueve' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked9: 'diecinueve' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="veinte"
                    status={checked9 === 'veinte' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked9: 'veinte' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>11. ¿Cree Ud. que es maravilloso estar vivo?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked10: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="veintiuno"
                    status={checked10 === 'veintiuno' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked10: 'veintiuno' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="veintidos"
                    status={checked10 === 'veintidos' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked10: 'veintidos' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>12. ¿Se siente inútil o despreciable como está Ud. actualmente?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked11: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="veintitres"
                    status={checked11 === 'veintitres' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked11: 'veintitres' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="veinticuatro"
                    status={checked11 === 'veinticuatro' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked11: 'veinticuatro' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>13. ¿Se siente lleno de energía?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked12: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="veinticinco"
                    status={checked12 === 'veinticinco' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked12: 'veinticinco' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="veintiseis"
                    status={checked12 === 'veintiseis' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked12: 'veintiseis' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>14. ¿Se encuentrra sin esperanza ante su situación actual?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked13: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="veintisiete"
                    status={checked13 === 'veintisiete' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked13: 'veintisiete' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="veintiocho"
                    status={checked13 === 'veintiocho' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked13: 'veintiocho' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.tituloLabel}>
            <Text style={styles.label}>15. ¿Cree Ud. que las otras personas están en general mejor que Ud?</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <RadioButton.Group
              onValueChange={(v) => { this.setState({ checked14: v }) }} >
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <RadioButton
                    value="veintinueve"
                    status={checked14 === 'veintinueve' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked14: 'veintinueve' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>Si</Text>
                <View>
                  <RadioButton
                    value="treinta"
                    status={checked14 === 'treinta' ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked14: 'treinta' }); }}
                  />
                </View>
                <Text style={styles.TextRadio}>No</Text>
              </View>
            </RadioButton.Group>
          </View>

          <View tyle={styles.tituloEdad}>
            <Text style={styles.TituloEda}>Cada una de estas respuestas cuenta <Text style={{color: 'red'}}>1 PUNTO.</Text></Text>
          </View>

          <View style={styles.inputContainer1}>
            <Icon name={'md-calculator'} size={25} color={'rgba(0,0,0,1)'}
              style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Total'}
              placeholderTextColor={'rgba(0,0,0,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={usuario => this.setState({ usuario })}
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.btnRegistrar}
              onPress={() => this.props.navigation.navigate('Test', {console})}>
              <Text style={styles.text}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCancelar} onPress={() => this.props.navigation.navigate('Test')}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
};
export default Formularioye;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    //alignItems: 'center',
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
  inputContainer1: {
    marginTop: 20,
    
  },
  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 40,
  },
  input: {
    width: 299,
    height: 42,
    borderRadius: 19,
    fontSize: 18,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: "#FEFCFC",
    marginHorizontal: 25,

  },
  TextRadio: {
    fontSize: 16,
    marginTop: 0,
    top: 6,
    opacity: 0.5,
    marginRight: 50
  },
  tituloEdad: {
    alignItems: 'center',
    marginBottom: 50
  },
  TituloEda: {
    color: '#020202',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
    textAlign: 'center'

  },

  logoLogin: {
    height: 150
  },

  tituloLabel: {
    paddingLeft: 20,
    paddingRight: 15,
    marginBottom: 20,
    marginTop: 0,
    textAlign: 'justify',
  },
  subtitulo: {
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center',
    marginTop: 0,
    textAlign: 'center',
  },
  TituloLogin: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 0,
    opacity: 0.5,
    justifyContent: 'center',

  },
  TextInfo: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3,
    opacity: 0.5,
    textAlign: 'justify',
  },
  TextInfoSub: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 3,
    opacity: 0.5,
    textAlign: 'center',
  },

  label: {
    fontSize: 16,
    paddingLeft: 0,
    marginTop: 10,
    flexDirection: 'row',
    top: 5,
    fontWeight: 'bold'

  },
  inputContainer: {
    marginTop: 10
  },

  btnRegistrar: {
    width: WIDTH - 300,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#005DA6',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 30

  },
  btnCancelar: {
    width: WIDTH - 300,
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