
  import React from 'react';
  import { View, Text, Button, Image, TouchableOpacity,StyleSheet, TouchableHighlight } from 'react-native';
 import HomeAdm from '../Adm/HomeAdm';
  function Adm({navigation}) {
    let fundo = require('../Home/jpg/capa.png')
   let logo = require('../Home/jpg/logotipo.jpg')
      return (
        <HomeAdm/>
      );
  }

  
  export default Adm;
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