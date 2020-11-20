import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './Pages/Login';
import ListaAMScreen from './Pages/lista_AM';
import RegistroScreen from './Pages/Registrarse';
import TestScreen from './Pages/Test';
import TestBarthelScreen from './Pages/TestBarthel';
import PreguntasBarthelScreen from './Pages/PreguntasTestBarthel';
import TestYesavageScreen from './Pages/TestYesavage';
import YesavageScreen from './Pages/Yesavage';
import FormularioyeScreen from './Pages/Formularioye';

/*function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Inicia Sesion</Text>
     <TextInput style={{width:'80%', height:35, borderWidth:1, borderRadius:12}} placeholder='Correo'/>
          <TextInput style={{width:'80%', height:35, borderWidth:1, borderRadius:12, marginTop:5}} placeholder='Contraseña' secureTextEntry={true} />
      <Button
        title="Go to Details"
        onPress={() => navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Details',
            },
          ],
        })}
      />
    </View>
  );
}

function HomeScreenn({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Pantalla 1 </Text>
      <Button
        onPress={() =>navigation.openDrawer()}
        title="Abrir menu lateral"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Pantalla 2 </Text>
 <Button
        onPress={() =>navigation.openDrawer()}
        title="Abrir menu lateral"
      />
          </View>
  );
}

const Drawer = createDrawerNavigator();
function Principal() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreenn} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}*/

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="Registrarse" component={RegistroScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="ListaAM" component={ListaAMScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="Test" component={TestScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="TestBarthel" component={TestBarthelScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="TestYesavage" component={TestYesavageScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="PreguntasBarthel" component={PreguntasBarthelScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="Yesavage" component={YesavageScreen} options={{
          title: '',
          headerShown: false
        }}/>
        <Stack.Screen name="Formularioye" component={FormularioyeScreen} options={{
          title: '',
          headerShown: false
        }}/>
        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
