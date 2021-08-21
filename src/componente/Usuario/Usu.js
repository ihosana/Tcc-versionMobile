
  import React from 'react';
  import { View, Text, Button, Image, TouchableOpacity,StyleSheet, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  function Usu({navigation}) {
    let fundo = require('../Home/jpg/png-32.jpg')
   let logo = require('../Home/jpg/logotipo.jpg')
      return (
          <View >
          
          <ScrollView>
          <View>
          <View style={estilo.estilizar}>
               
          </View>
          <View style={{backgroundColor:"darkcyan",marginLeft:63, marginTop:30, width:230, height:5}}>
               
               </View>
          <Text style={{marginTop:30, marginLeft:70}}>Nome:</Text>
          <Text style={{marginTop:30, marginLeft:70}}>Tipo :</Text>
          <Text style={{marginTop:30, marginLeft:70}}>PSF :</Text>
          <Image style={{width:230, height:150, marginLeft:63, marginTop:20}} source={fundo}/>
          <TouchableOpacity style={{backgroundColor:"darkcyan",marginLeft:67, marginTop:20, width:230, height:50}}>
               <Text style={{marginLeft:80, marginTop:10, color:"white", fontSize:20}}>Excluir</Text>
               </TouchableOpacity>
          </View>
         
          <View>
          <View style={estilo.estilizar}>
               
          </View>
          <View style={{backgroundColor:"darkcyan",marginLeft:63, marginTop:30, width:230, height:5}}>
               
               </View>
          <Text style={{marginTop:30, marginLeft:70}}>Nome:</Text>
          <Text style={{marginTop:30, marginLeft:70}}>Tipo :</Text>
          <Text style={{marginTop:30, marginLeft:70}}>PSF :</Text>
          <Image style={{width:230, height:150, marginLeft:63, marginTop:20}} source={fundo}/>
          <TouchableOpacity style={{backgroundColor:"darkcyan",marginLeft:67, marginTop:20, width:230, height:50}}>
               <Text style={{marginLeft:80, marginTop:10, color:"white", fontSize:20}}>Excluir</Text>
               </TouchableOpacity>
          </View>
          </ScrollView>
          </View>
      );
  }

  export default Usu;
  const estilo = StyleSheet.create({
      estilizar:{
        backgroundColor: "lightgrey",
      borderWidth: 0,
      marginTop: 30,
      marginLeft:29,
      width: 300,
      height: 400,
      opacity: 0.7,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'

      }
  })