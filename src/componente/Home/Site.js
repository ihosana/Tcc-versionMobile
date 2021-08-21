import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableHighlight} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import decorar from './estilizar/decorar';
 class Site extends Component{
   render()
   {
       let logo = require('../Home/jpg/logotipo.jpg')
       let fundo= require('../Home/jpg/png-9.jpg')
       let sinalmais= require('../Home/jpg/mais.png')
       let corona= require('../Home/jpg/coro.png')
       let whats= require('../Home/jpg/whats.png');
       let fila= require('../Home/jpg/fila.png')
       return(
           <View>
            <TouchableHighlight style={decorar.botao} onPress={() => {navigation.navigate('Login')}}>
                 <Text style={{ color: "navajowhite", fontSize: 14 }}>
              Cadastro
   </Text>
                </TouchableHighlight>
           
                  
               
               
           </View>
       );
     
   }
}
export default Site;