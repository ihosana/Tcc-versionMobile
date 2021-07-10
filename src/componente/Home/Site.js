import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableHighlight} from 'react-native'
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
           <ScrollView>
           <View style={decorar.top}> 
            {/*
               <Image style={{width:140, height:117, marginLeft:117,flexDirection:'row', marginRight:30}}
               source={logo}/>
            */}
   
               </View>
               <Image style={{ width:400,  height:280, marginRight:10, margin:0 }}
                   source={fundo}/>
                      <View style={decorar.paperblack}>
                   </View>
                 <TouchableHighlight style={decorar.botao}>
                 <Text style={decorar.menus}>
                  Login
                 </Text>
                </TouchableHighlight>
                   <View>
                       <Text style={decorar.texto}>
                       Lorem Ipsum is simply dummy text of the printing and 
                       typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, </Text>
                       <View>
                          <Image style={{width:100, height:100, marginLeft:120, marginRight:30, marginTop:20}}
                          source={fila}/>
                            <Text style={decorar.texto}>
                       Lorem Ipsum is simply dummy text of the printing and 
                       typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown 
                     </Text>
                     <Image style={{width:100, height:100, marginLeft:120, marginRight:30, marginTop:20}}
                          source={sinalmais}/>
                            <Text style={decorar.texto}>
                       Lorem Ipsum is simply dummy text of the printing and 
                       typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown 
                     </Text>
                     <Image style={{width:110, height:110, marginLeft:120, marginRight:30, marginTop:20}}
                          source={corona}/>
                            <Text style={decorar.texto}>
                       Lorem Ipsum is simply dummy text of the printing and 
                       typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown 
                     </Text>
                    

                       </View>
                       <View style={decorar.rodape}>
                           
               <Image style={{width:140, height:117, marginLeft:117, marginRight:30}}
               source={whats}/>
                       </View>
                   </View>
                     </ScrollView>
           </View>
       );
     
   }
}
export default Site;