
  import React from 'react';

  /* Importamos os recursos necessarios para nossa navegação */
  import { NavigationContainer } from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import Icon from 'react-native-vector-icons/Ionicons'
  /* Importamos nossas páginas criadas para inserir dentro da navegação */
  import Home from './src/componente/Home/';
  import Sobre from './src/componente/Sobre';
  import Lista from './src/componente/Lista'

  /* Criamos nosso navegador com a variavel Stack */
  const Stack = createBottomTabNavigator();
  const icons={
    Home:{
     name:'ios-home'
    },
    Sobre: {
      name: 'ios-people'
    },
    Lista: {
      name: 'ios-people'
    }
  }
  const MyTheme = {
    dark: false,
    colors: {
      primary: 'rgb(242, 242, 80)',
      background: 'rgb(255, 255, 255)',
      card: 'rgb(0,128,128)',
      text: 'rgb(255, 255, 255)',
      border: 'rgb(199, 199, 204)',
    },
  };

  function App() {
    return(
      /* Abre container da navegação */
      <NavigationContainer theme={MyTheme}>
        {/* Insere a navegação Stack dentro container */}
        <Stack.Navigator
         screenOptions={ ({route}) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <Icon name={name} color={color} size={size} />
            }
          })  }
          tabBarOptions={{
            activeTintColor: 'cyan',
            inactiveTintColor: 'white',
          }}>
          {/*Insere as páginas dentro da navegação*/}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Lista" component={Lista} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
              