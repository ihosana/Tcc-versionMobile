import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Usu from '../Usuario/Usu';
import decorar from '../Home/estilizar/decorar'

let fundo = require('../Home/jpg/png-48.jpg');
let logo = require('../Home/jpg/png-9.jpg');
let foto = require('../Home/jpg/png-34.jpg');
let mais = require('../Home/jpg/maismais.png')
function HomeUser ({ navigation }){

    return (
      <View style={{marginTop:2}}>
        <View style={decorar.papelblack}></View>
       <Image style={{width:100,marginLeft:120, marginTop:20,  height:100}} source={mais}/>
         
       <Text style={{marginTop:8, marginLeft:120,opacity:0.9, fontSize:23, color:"white", marginBottom:2, marginRight:40}}>
                  Nova Vida
</Text>
     <Text style={{marginTop:2, marginLeft:107,opacity:0.9, fontSize:15, color:"cyan", marginBottom:2, marginRight:40}}>
                  Atendimento virtual
</Text>
    
          <Text style={{marginTop:30, marginLeft:60,opacity:0.6,alignItems:'center', color:"white", marginBottom:90, marginRight:40}}>
                  A primeira temporada do drama médico americano Grey's Anatomy
                  A primeirar    
</Text>
  <Text style={{marginTop:2, marginLeft:60,alignItems:'center', color:"black", marginBottom:60, marginRight:40}}>
                  A primeira temporada do drama médico americano Grey's Anatomy
                
                 
</Text>
    
      <ScrollView horizontal={true} align="center">
    
        <View style={{marginTop:20}}>
        <View>
  
       <Image  style={{width:290,marginLeft:10,borderRadius:20, height:300, marginTop:0}} source={fundo}
      />
      <View style={{width:290,marginLeft:10,borderRadius:20, height:300, backgroundColor:'black', 
                position: 'absolute',
                justifyContent: 'center',
                opacity:0.5}}></View>
      <Text style={{
                position: 'absolute',
                justifyContent: 'center',
                marginTop:200,
                color: 'white',
                fontSize:25,
                marginLeft:100}}>Nova vida</Text>
                <Text style={{
                position: 'absolute',
                justifyContent: 'center',
                marginTop:240,
                color: 'white',
                fontSize:15,
                marginLeft:40}}>
                 Agendamento de consultas online
                </Text>  
       
              </View>          
              </View>

              <View style={{marginTop:20}}>
              <View>
       <Image  style={{width:290,marginLeft:10,borderRadius:20, height:300, marginTop:0}} source={foto}
      />
      <View style={{width:290,marginLeft:10,borderRadius:20, height:300, backgroundColor:'black', 
                position: 'absolute',
                justifyContent: 'center',
                opacity:0.5}}></View>
      <Text style={{
                position: 'absolute',
                justifyContent: 'center',
                marginTop:200,
                color: 'white',
                fontSize:25,
                marginLeft:100}}>Nova vida</Text>
                <Text style={{
                position: 'absolute',
                justifyContent: 'center',
                marginTop:240,
                color: 'white',
                fontSize:15,
                marginLeft:40}}>
                 Agendamento de consultas online
                </Text>        
                </View>        
              </View>
              <View style={{marginTop:20}}>
              <View>
       <Image  style={{width:290,marginLeft:10,borderRadius:20, height:300, marginTop:0, marginRight:10}} source={logo}
      />
      <View style={{width:290,marginLeft:10,borderRadius:20, height:300, backgroundColor:'black', 
                position: 'absolute',
                justifyContent: 'center',
                opacity:0.5}}></View>
      <Text style={{
                position: 'absolute',
                justifyContent: 'center',
                marginTop:200,
                color: 'white',
                fontSize:25,
                marginLeft:100}}>Nova vida</Text>
                <Text style={{
                position: 'absolute',
                justifyContent: 'center',
                marginTop:240,
                color: 'white',
                fontSize:15,
                marginLeft:40}}>
                 Agendamento de consultas online
                </Text>   
                </View>             
              </View>
       
                </ScrollView>
                <ScrollView>
          <Text style={{marginTop:30, marginLeft:38, marginBottom:20, marginRight:40}}>
                  A primeira temporada do drama médico americano Grey's Anatomy,
                   começou a ser exibida nos Estados Unidos na American Broadcasting 
              
</Text>
                </ScrollView>
      </View>
    );
  }

export default HomeUser;

{
  /*
            <Animated.View    style={{
              marginHorizontal: 20,
              padding:10,
              marginTop:20,
              height:470,
              alignItems: 'center',
              borderRadius: 34
            }} >
         
                   <ScrollView horizontal={true} >
                   <View>
                      <View style={{
                     backgroundColor:"",
                      width:250,
                       height:400, 
                      marginLeft:20,
                      marginTop:20,
                    borderRadius:30,
                    borderWidth:2,
                     position: 'absolute',
                    justifyContent: 'center'}}></View>
                
                     
                      <Image style={{width:200,marginBottom:50, height:200, marginTop:30, marginLeft:40
                      }} source={fundo}/>
                   <Text style={{width:200,marginBottom:0, marginLeft:50,height:200}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna 
                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            
                   </Text>
                   </View>
                   <View>
                      <View style={{
                     backgroundColor:"",
                      width:250,
                       height:400, 
                      marginLeft:50,
                      marginTop:20,
                    borderRadius:30,
                    borderWidth:2,
                     position: 'absolute',
                    justifyContent: 'center'}}></View>
                
                      <Image style={{width:200,marginBottom:50, height:200, marginTop:30, marginLeft:75
                      }} source={fundo}/>
                   <Text style={{width:200,marginBottom:0, marginLeft:90,height:200}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna 
                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            
                   </Text>
                   </View>
                   <View>
                       
                       <View style={{
                      backgroundColor:"",
                       width:250,
                        height:400, 
                       marginLeft:50,
                       marginTop:20,
                     borderRadius:30,
                     borderWidth:2,
                      position: 'absolute',
                     justifyContent: 'center'}}></View>
                
                       <Image style={{width:200,marginBottom:50,marginRight:50, height:200, marginTop:30, marginLeft:75
                       }} source={fundo}/>
                    <Text style={{width:200,marginLeft:90, marginRight:20,height:200}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             
                    </Text>
                    </View>
                    
                  </ScrollView>
        
          </Animated.View>
          ------>outra estilização--------------------------------  <ScrollView horizontal={true}>
          <View>
            <Image style={{height: 400, width: 370}} source={logo} />
            <View
              style={{
                fontSize: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: 380,
                height: 500,
                opacity: 0.6,
                backgroundColor: 'black',
              }}></View>
            <Text
              style={{
                fontSize: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                marginTop: 200,
                marginLeft: 17,
              }}>
              Olá imagem 1
            </Text>
          </View>
          <View>
            <Image style={{height: 400, width: 370}} source={logo} />
            <View
              style={{
                fontSize: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: 380,
                height: 500,
                opacity: 0.6,
                backgroundColor: 'black',
              }}></View>
            <Text
              style={{
                fontSize: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                marginTop: 200,
                marginLeft: 17,
              }}>
              Olá imagem 1
            </Text>
          </View>
          <View>
            <Image style={{height: 400, width: 370}} source={fundo} />
            <View
              style={{
                fontSize: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                width: 380,
                height: 500,
                opacity: 0.6,
                backgroundColor: 'black',
              }}></View>
            <Text
              style={{
                fontSize: 20,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                marginTop: 200,
                marginLeft: 17,
              }}>
              Olá imagem 1
            </Text>
          </View>
        </ScrollView>
                      */
}
