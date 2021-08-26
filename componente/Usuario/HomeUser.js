
  import React, { Component } from 'react';
  import { View, Text, Button, Image, TouchableOpacity,StyleSheet, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

 class HomeUser extends Component {
   render(){
    let fundo = require('../Home/jpg/coro.png')
   let logo = require('../Home/jpg/png-45.jpg')

      return (
          <View > 
                   <ScrollView horizontal={true} >
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
                 
                       <Image style={{width:200,marginBottom:50, height:200, marginTop:30, marginLeft:75
                       }} source={fundo}/>
                    <Text style={{width:200,marginLeft:90,height:200}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             
                    </Text>
                    </View>
                
                  </ScrollView>
        
          </View>
            
      );
  }
 }
  export default HomeUser;