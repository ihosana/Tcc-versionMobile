
  import React from 'react';
  import { View, Text, Button, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
   import Usuario from '../Usuario';
   import Adm from '../Adm';
   import Class from './Class';
   import decorar from './estilizar/decorar';
  function Home({navigation}) {
    let logo = require('../Home/jpg/logotipo.jpg')
    let fundo= require('../Home/jpg/png-47.jpg')
      return (
          <View >
                   <Image style={{
                      width:400,
                     height:520,    
                     position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center' }}
                   source={fundo}/>
                      <View style={decorar.paperblack}>
                   </View>
              
                 <TouchableOpacity style={decorar.botao} onPress={() => {navigation.navigate('Login')}}>
                 <Text style={{ color: "white", fontSize: 17 }}>
                  Entrar
                 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Usuario')}}>
                 <Text style={{ color: "white", fontSize: 17 }}>
                  Usuário
                 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Adm')}}>
                 <Text style={{ color: "white", fontSize: 17 }}>
                  ADM
                 </Text>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Class')}>
                 <Text style={{ color: "white", fontSize: 17 }}>
              class
                 </Text>
                </TouchableOpacity>
            
              
          
          </View>
      );
  }

  export default Home;