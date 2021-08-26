
  import React, { Component } from 'react';
  import { View, Text, Button, Image, TouchableOpacity,StyleSheet, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import HomeUser from './HomeUser';
 class Usuario extends Component {
   render(){
    let fundo = require('../Home/jpg/coro.png')
   let logo = require('../Home/jpg/png-45.jpg')

      return (
          <ScrollView>
              <HomeUser/>
          </ScrollView>
      );
  }
 }
  export default Usuario;
  const estilo = StyleSheet.create({
      estilizar:{
        backgroundColor: "black",
      borderWidth: 0.4,
      marginTop: 0,
      width: "100%",
      height: 520,
      opacity: 0.2,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'

      }
  })