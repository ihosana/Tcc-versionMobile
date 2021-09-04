import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Coronavirus from '../Usuario/Coronavirus';
import decorar from '../Home/estilizar/decorar';
class Login extends React.Component {
  render() {
    let imagem = require('../Home/jpg/png-9.jpg');
    let logo = require('../Home/jpg/maismais.png')
    return (
      <View>
      {/*
        <Image
          style={{
            width: '100%',
            height: 240,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={imagem}
        />
    
        <View style={decorar.paperblack}></View>
        <View style={decorar.papel}></View>
          */}
        <View style={decorar.papelbranco}></View>
        <Image
          style={{
            width: '100%',
            height: 240,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            height:200, 
            opacity:0.2
          }}
          source={imagem}
        />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
             marginTop: 40          }}>
         {/*   <Image style={{width:90, height:90, marginBottom:1}} source={logo}/>
           <Text style={{marginTop:0, marginLeft:50,opacity:0.9, fontSize:23, color:"white", marginBottom:0, marginRight:40}}>
                  Nova Vida
</Text>
     <Text style={{marginTop:1, marginLeft:45,opacity:0.9, fontSize:15, color:"cyan", marginBottom:20, marginRight:40}}>
                  Atendimento virtual
</Text>
      */}
         <Text style={{fontSize: 27, color: 'white',opacity:0.9,marginTop:60, marginBottom: 18}}>
            Login
          </Text>
        <TextInput
            style={{
              backgroundColor: 'white',
              height: 45,
              width: 250,
              marginBottom: 10,
              borderWidth:1,
              borderColor:'gray',
              borderRadius: 3,
            }}
            placeholder="Insira o login"></TextInput>
          <TextInput
            style={{
              backgroundColor: 'white',
              height: 45,
              width: 250,
              borderWidth:1,
              borderColor:'gray',
              margin: 2,
              borderRadius: 3,
            }}
            placeholder="Insira a senha"></TextInput>
            {/*
          <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
              style={{
                borderWidth:1.2,

                borderColor:'darkcyan',
                padding: 12,
                width: 120,
                marginTop: 20,
                borderRadius: 100,
                marginRight:10,
              }}>
              <Text style={{fontSize: 15, marginLeft: 10, color: 'darkcyan'}}>
                Cadastrar
              </Text>
            </TouchableOpacity>
            */}
            <TouchableOpacity
              style={{
                backgroundColor: 'darkcyan',
                padding: 12,
                width: 250,
                marginTop: 10,
                borderRadius: 7,
              }}>
              <Text style={{fontSize: 15, marginLeft: 80, color: 'white'}}>
                Acessar
              </Text>
            
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                borderRadius: 100,
                marginRight:170,
              }}>
              <Text style={{fontSize: 15, marginLeft: 10, opacity:0.7, color: 'cyan'}}>
                Cadastra-se
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      
    );
  }
}

export default Login;
