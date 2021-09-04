
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
  import HomeAdm from './src/componente/Adm/HomeAdm';
  import Buttono from './src/componente/button/Buttono';
  import Coronavirus from './src/componente/Usuario/Coronavirus';
import { buildMatchMemberExpression } from '../Atividade1camera/node_modules/@babel/types/lib';
import ListaUser from './src/componente/Adm/ListaUser';
import ListaCadastro from './src/componente/Adm/ListaCadastro';
  const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const icones={
  
  Adm:{
    name: 'home'
  },

  ListaUser:{
  
    name: 'users'
  },
ListaCadastro:{
  name:'users'
}}


const icons={

  Usuario:{
    name: 'home'
  },

  Cadastro:{
    name: 'user'
  },

  Usu:{
    name: 'circle-with-plus'
  },




};
function Administrador(){
  return(
<Tab.Navigator 
    
    screenOptions={ ({route}) => ({
     tabBarIcon: ({ color, size }) => {
       const { name } = icones[route.name];
       return <Icon name={name} color={color} size={size} />
     }
   })  }
   tabBarOptions={{
     style:{
       backgroundColor:"#121212"
     },
     activeTintColor: 'cyan',
     tabStyle:{
   paddingBottom:5,
   marginTop:5,
     },
     inactiveTintColor: 'white',
   }}>
     <Tab.Screen
      name="Adm" component={Adm} />
     <Tab.Screen name="ListaUser" component={ListaUser}  />  
     <Tab.Screen name="ListaCadastro" component={ListaCadastro} />

    
   </Tab.Navigator>

  );
}
function Button(){
  return(
    <Tab.Navigator 
    
     screenOptions={ ({route}) => ({
      tabBarIcon: ({ color, size }) => {
        const { name } = icons[route.name];
        return <Icon name={name} color={color} size={size} />
      }
    })  }
    tabBarOptions={{
      style:{
        backgroundColor:"#121212"
      },
      activeTintColor: 'cyan',
      tabStyle:{
    paddingBottom:5,
    marginTop:5,
      },
      inactiveTintColor: 'white',
    }}>
      <Tab.Screen
       name="Usuario" component={Usuario} />
      <Tab.Screen name="Usu" component={Usu} 
      options={{
      tabBarLabel:'',
        tabBarIcon:({size, color}) =>( <Buttono size={size} color={color} /> )
      }} />
      <Tab.Screen name="Cadastro" component={Cadastro}  />
    </Tab.Navigator>
  );
};




  function App() {
    return(
      /* Abre container da navegação */
      <NavigationContainer>
      
      {/* Insere a navegação Stack dentro container */}
      <Stack.Navigator >
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
    
          <Stack.Screen name="ListaUser" component={ ListaUser}
           options={{headerStyle:{
          backgroundColor:"black", 
        },
        headerTintColor:"white"

        }}  />
     
        
        <Stack.Screen name="Usuario" component={Button}  
        options={{headerStyle:{
          backgroundColor:"#1C1C1C", 
        },
        headerTintColor:"white"

        }}  />
               <Stack.Screen name="Cadastro" component={Button} 
        options={{headerStyle:{
          backgroundColor:"121212", 
        },
        headerTintColor:"lightgrey"

        }}  />
        <Stack.Screen name="Usu" component={Button} 
        options={{headerStyle:{
          backgroundColor:"#121212", 
        },
        headerTintColor:"white"

        }}  />
            <Stack.Screen name="Adm" component={ Administrador}
           options={{headerStyle:{
          backgroundColor:"darkcyan", 
        },
        headerTintColor:"white"

        }}  />
           <Stack.Screen name="ListaCadastro" component={ Administrador}
           options={{headerStyle:{
          backgroundColor:"black", 
        },
        headerTintColor:"white"

        }}  />
        
        
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

  export default App;
              