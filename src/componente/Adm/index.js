
  import React from 'react';
  import { View, Text, Button, Image, TouchableOpacity,StyleSheet, TouchableHighlight } from 'react-native';

  function Adm({navigation}) {
    let fundo = require('../Home/jpg/capa.png')
   let logo = require('../Home/jpg/logotipo.jpg')
      return (
          <View >
          
          <Image style={{
                      width:400,
                     height:520,    
                     position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center'}}
                   source={fundo}/>
               <View style={estilo.estilizar}>

               </View>
              
          <Text style={{color: "gray", marginTop:100, fontSize:17, fontFamily:"bold" }}> - Utilidade de uma nova plataforma</Text>
          <Text style={{color: "gray", marginTop:10, fontSize:17, fontFamily:"bold" }}> - Consultas previamentes atendidas</Text>
          <Text style={{color: "gray", marginTop:40, fontSize:17, fontFamily:"bold" }}> - Consultas previamentes atendidas</Text>
          <Text style={{color: "gray", marginTop:10, fontSize:17, fontFamily:"bold" }}> - Consultas previamentes atendidas</Text>
          <Text style={{color: "gray", marginTop:40, fontSize:17, fontFamily:"bold" }}> - Consultas previamentes atendidas</Text>
          <Text style={{color: "gray", marginTop:10, fontSize:17, fontFamily:"bold" }}> - Consultas previamentes atendidas</Text>
        
        
        
          </View>
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