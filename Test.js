import { StatusBar } from 'expo-status-bar';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { Button} from 'react-native';
import React, { Component } from 'react';
import { 
         StyleSheet,  
         View,
        ImageBackground, 
        TextInput,
        Dimensions,
        TouchableOpacity, AsyncStorage} from 'react-native';
import bgImage from '../assets/img_sistema/fondo_login.jpg';
import lgLogin from '../assets/img_sistema/login_img.png';
//import AvUser from '../assets/img_sistema/user.png';
import AvUser from '../assets/img_sistema/prueba.png';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';




const {width: WIDTH} = Dimensions.get('window')

export class Test extends Component{
  TestBarthel = () =>{
    this.props.navigation.navigate('TestBarthel')
}  
  Yesavage = () =>{
     
    this.props.navigation.navigate('Yesavage')
        
    }
   
    render() {
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer} >
        <Content padder >
        
        <Text style={styles.Titulo}>TEST</Text>
        
            <List >
            <ListItem avatar onPress={this.TestBarthel}>
              <Left>
                <Thumbnail source={AvUser} />
              </Left>
              <Body>
                <Text style={styles.text}>3a) Indice de Barthel </Text>
                <Text note>Actividades Básicas de la Vida Diaria </Text>
              </Body>
            </ListItem>
            <ListItem avatar onPress={this.TestLawton}>
              <Left>
                <Thumbnail source={AvUser} />
              </Left>
              <Body>
                <Text style={styles.text}>3b) Escala de Lawton y Brody </Text>
                <Text note>Actividades Instrumentales de la Vida Diaria </Text>
              </Body>
              
            </ListItem>
            <ListItem avatar onPress={this.MiniExamen}>
              <Left>
                <Thumbnail source={AvUser} />
              </Left>
              <Body>
                <Text style={styles.text}>3c) Mini Examen del Estado Mental </Text>
                <Text note>Deterioro Cognitivo</Text>
              </Body>
              
            </ListItem>
            <ListItem avatar onPress={this.Yesavage}>
              <Left>
                <Thumbnail source={AvUser} />
              </Left>
              <Body>
                <Text style={styles.text}>3d) Escala Geriática de Depresión de Yesavage</Text>               
                <Text note>Posible Presencia de Depresión</Text>
              </Body>
              
            </ListItem>
          </List>
               
        </Content>
      </ImageBackground>
    );}
  }
  export default Test;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 50,
  },
  Titulo: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    opacity: 0.5,
    textAlign: 'center'
  },
  text: {
    paddingTop: 10,
    fontWeight: 'bold'
  }
});
