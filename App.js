
  import React from 'react';

  import { createStackNavigator } from '@react-navigation/stack';
  /* Importamos os recursos necessarios para nossa navegação */
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Icon from 'react-native-vector-icons/Entypo'
  /* Importamos nossas páginas criadas para inserir dentro da navegação */
  import Home from './src/componente/Home/';
  import Login from './src/componente/Login';
  import Lista from './src/componente/Lista'
  import Usuario from './src/componente/Usuario/index';
  import Adm from './src/componente/Adm';
  import Usu from './src/componente/Usuario/Usu'
  import Cadastro from './src/componente/Usuario/Cadastro';
import { buildMatchMemberExpression } from '../Atividade1camera/node_modules/@babel/types/lib';

  /* Criamos nosso navegador com a variavel Stack */

  const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons={

  Usuario:{
    name: 'home'
  },

  Cadastro:{
    name: 'home'
  },

  Usu:{
    name: 'circle-with-plus'
  },




};
function Button(){
  return(
    <Tab.Navigator  screenOptions={ ({route}) => ({
      tabBarIcon: ({ color, size }) => {
        const { name } = icons[route.name];
        return <Icon name={name} color={color} size={size} />
      }
    })  }
    tabBarOptions={{
      activeTintColor: 'darkcyan',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Usuario" component={Usuario} />
      <Tab.Screen name="Usu" component={Usu}  />
      <Tab.Screen name="Cadastro" component={Cadastro}  />
    </Tab.Navigator>
  );
}

  function App() {
    return(
      /* Abre container da navegação */
      <NavigationContainer>
      
      {/* Insere a navegação Stack dentro container */}
      <Stack.Navigator>
        {/*Insere as páginas dentro da navegação*/}
        <Stack.Screen name="Bem vindos" component={Home} 
        options={{headerStyle:{
          backgroundColor:"black", 
        },
        headerTintColor:"white"

        }} />
        <Stack.Screen name="Login" component={Login}
           options={{headerStyle:{
          backgroundColor:"black", 
        },
        headerTintColor:"white"

        }}  />
        <Stack.Screen name="Adm" component={Adm}
           options={{headerStyle:{
          backgroundColor:"black", 
        },
        headerTintColor:"white"

        }}  />
     
        
        <Stack.Screen name="Usuario" component={Button}  
        options={{headerStyle:{
          backgroundColor:"darkcyan", 
        },
        headerTintColor:"lightgrey"

        }}  />
               <Stack.Screen name="Cadastro" component={Button} 
        options={{headerStyle:{
          backgroundColor:"darkcyan", 
        },
        headerTintColor:"lightgrey"

        }}  />
        <Stack.Screen name="Usu" component={Button} 
        options={{headerStyle:{
          backgroundColor:"darkcyan", 
        },
        headerTintColor:"lightgrey"

        }}  />
        
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

  export default App;
              