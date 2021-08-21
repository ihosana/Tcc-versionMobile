
  import React from 'react';
  import { View, Text, Button, Image, TouchableOpacity,StyleSheet, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

  function Usuario({navigation}) {
    let fundo = require('../Home/jpg/png-6.jpg')
   let logo = require('../Home/jpg/png-45.jpg')

      return (
          <View >
         
                <View>
                <View>
              
           {/* 
              
          <Image style={{
                      width:400,
                     height:520,    
                     position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center'}}
                   source={fundo}/>
               <View style={estilo.estilizar}>

               </View>
           <Image style={{width:120, height:120,    
                     position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center' }} source={logo}/> 
              */}
                  </View>
            <View>
                    <TouchableOpacity style={{ width:100, height:50, padding:12, borderRadius:10, borderColor:"darkcyan",borderWidth:2, marginTop:10, marginLeft:240}}>
                        <Text style={{marginLeft:10,color:"darkcyan", fontSize:16}}>
                            Marcar 
                        </Text>
                    </TouchableOpacity>
                  </View>
                  <ScrollView>
                      <Image style={{width:"100%", height:100, marginTop:20
                      }} source={fundo}/>
                  </ScrollView>
        
          </View>
            
          </View>
      );
  }

  export default Usuario;
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