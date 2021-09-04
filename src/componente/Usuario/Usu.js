import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  CheckBox,
  TouchableHighlight,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function Usu({navigation}) {
  let fundo = require('../Home/jpg/png-40.jpg');
  let logo = require('../Home/jpg/logotipo.jpg');
  return (
    <View>
      <View>
        <View
          style={{
            backgroundColor: '#1C1C1C',
            width: 400,
            height: 200,
            marginTop: 0,
            marginLeft: 0,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 424}}>
          <View>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginLeft: 0,
                marginBottom: 10,
              }}>
              Agendamento de consultas
            </Text>
            <View style={{padding:2, marginBottom:17}}>
            <Text style={{ marginBottom:30,opacity:0.7,  marginLeft:17, marginBottom:20, marginRight:40,color: 'cyan' , fontStyle: 'italic' }}>
            De consultas online, não perca </Text>
            </View>
            <TextInput
              style={{
                backgroundColor: 'white',
                height: 46,
                width: 240,
                borderRadius: 3,
                
                borderColor:"gray",
                borderWidth:1,
              }}
              placeholder="Nome completo"></TextInput>
            <TextInput
              style={{
                backgroundColor: 'white',
                height: 46,
                width: 240,
                borderColor:"gray",
                borderWidth:1,
                marginBottom:5,
                borderRadius: 3,
              }}
              placeholder="Cidade"></TextInput>
            <TextInput
              style={{
                backgroundColor: 'white',
                height: 46,
                width: 240,
                
                borderColor:"gray",
                borderWidth:1,
                borderRadius: 3,
                marginBottom:5,
              }}
              placeholder="Tipo da consulta"></TextInput>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={{
                  backgroundColor: 'white',
         
                  height: 46,
                  width: 100,
                  borderRadius: 3,
                  marginBottom:5,
                borderColor:"gray",
                borderWidth:1,
                }}
                placeholder="Idade"></TextInput>
              <TextInput
                style={{
                  backgroundColor: 'white',
       
                  marginLeft: 39,
                  height: 46,
                  width: 100,
                  borderRadius: 3,
                  marginBottom:5,
                borderColor:"gray",
                borderWidth:1,
                }}
                placeholder="data"></TextInput>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'darkcyan',
                padding: 13,
                width: 240,
                marginTop: 20,
                borderRadius: 3,
              }}>
              <Text style={{fontSize: 15, marginLeft: 70, color: 'white'}}>
                Agendar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Usu;
const estilo = StyleSheet.create({
  estilizar: {
    backgroundColor: 'lightgrey',
    borderWidth: 0,
    marginTop: 30,
    marginLeft: 29,
    width: 300,
    height: 400,
    opacity: 0.7,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
