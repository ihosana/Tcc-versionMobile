import React, {Component} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';

export default class ListaCadastro extends Component {
  render() {
    return (
      <View style={{}}>
        <ScrollView>
          <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: 'lightgray',
              marginTop: 20,
              marginLeft: 28,
              position: 'absolute',
              justifyContent: 'center',
            }}></View>
          <View
            style={{
              marginTop: 22,
              backgroundColor: 'darkcyan',
              position: 'absolute',
              justifyContent: 'center',
              width: 130,
              height: 50,
              marginLeft: 30,
            }}></View>

          <View style={{marginTop: 27, marginBottom: 30, marginLeft: 47}}>
            <Text
              style={{
                marginTop: 8,
                marginBottom: 30,
                marginLeft: 6,
                fontSize: 20,
                color: 'white',
              }}>
              30/4/90
            </Text>
           <ScrollView>
            <Text style={{marginBottom: 1}}>Nome</Text>
            <Text style={{marginBottom: 20}}>Tipo de Consulta</Text>

            <Text style={{marginBottom: 6}}>Nome</Text>
            <Text style={{marginBottom: 20}}>Tipo de Consulta</Text>

            
          </ScrollView>
          </View>
          <View
            style={{
              height: 200,
              width: 300,
              backgroundColor: 'lightgray',
              marginTop: 260,
              marginLeft: 28,
              position: 'absolute',
              justifyContent: 'center',
            }}></View>
          <View
            style={{
              marginTop: 260,
              backgroundColor: 'darkcyan',
              position: 'absolute',
              justifyContent: 'center',
              width: 130,
              height: 50,
              marginLeft: 30,
            }}></View>

          <View style={{marginTop: 10, marginBottom: 30, marginLeft: 47}}>
            <Text
              style={{
                marginTop: 18,
                marginBottom: 30,
                marginLeft: 6,
                fontSize: 20,
                color: 'white',
              }}>
              37/4/90
            </Text>

            <Text style={{marginBottom: 1}}>Nome</Text>
            <Text style={{marginBottom: 20}}>Tipo de Consulta</Text>

            <Text style={{marginBottom: 6}}>Nome</Text>
            <Text style={{marginBottom: 20}}>Tipo de Consulta</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
