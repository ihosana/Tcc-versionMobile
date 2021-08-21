import React from 'react';
import { View, Text, Button, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';

import decorar from '../Home/estilizar/decorar';
function Login() {
    let imagem= require('../Home/jpg/png-20.jpg');

    return (
        
        <View>
             <Image style={{ width: '100%', height: 520, position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center'}}
          source={imagem} />
               <View style={decorar.paperblack}>
                   </View>

                   <View style={{ alignItems: 'center', justifyContent: 'center', padding:100}}>
                   <Text style={{fontSize:27, color:'white', marginBottom:18}}>Login</Text>
            <TextInput style={{  backgroundColor: "white",height: 46, width:200, marginBottom: 10,borderRadius: 5
             }}  placeholder="Insira o login"></TextInput>
        <TextInput style={{  backgroundColor: "white",height: 46,width:200, margin: 10,borderRadius: 5
             }}  placeholder="Insira a senha"></TextInput>
 
             <TouchableOpacity style={{backgroundColor:"cyan", padding:16,width:120, marginTop: 20, borderRadius:10}}>
                 <Text style={{fontSize:15,marginLeft:10}}>
                     Acessar
                 </Text>
             </TouchableOpacity>

         </View>
        </View>
    );
}

export default Login;