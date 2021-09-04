import React, { Component} from 'react';
import { View, Text, Button, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ListaUser extends Component {
    render(){
        let imagem = require('../Home/jpg/png-47.jpg')
        return(
            <View style={{backgroundColor:"#1C1C1C", height:"100%"}}>
            
            <ScrollView>
                 <View style={{ height:140, width:370, marginBottom:300, marginLeft:0, backgroundColor:"lightgray",marginTop:20,    position: 'absolute',
                justifyContent: 'center',borderRadius:2, }}>

            </View>
           {/*  <View style={{ height:200, width:24, borderRadius:3,marginBottom:0, marginLeft:30, backgroundColor:"darkcyan",marginTop:20,    position: 'absolute',
                justifyContent: 'center', }}>

            </View>
            */}
            <View style={{ marginLeft:2, padding:19, marginTop:10, marginBottom:4}}>
       
            <Text style={{marginBottom:13,fontSize:17, color:"darkcyan"}}>Pedro Alves</Text>
            <Text style={{marginBottom:13,fontSize:15,}}>Idade:</Text>
            <Text style={{marginBottom:13,fontSize:15,}}>Email:</Text>
            <Text style={{marginBottom:13,fontSize:15,}}>Senha:</Text>
            </View>
            <View style={{ height:140, width:370, marginBottom:300, marginLeft:0, backgroundColor:"lightgray",marginTop:210,    position: 'absolute',
                justifyContent: 'center',borderRadius:2, }}>

            </View>
            <View style={{ marginLeft:2, padding:19, marginTop:10, marginBottom:40}}>
       
            <Text style={{marginBottom:13,fontSize:17, color:"darkcyan"}}>Lucas Pedro</Text>
            <Text style={{marginBottom:13,fontSize:15,}}>Idade:</Text>
            <Text style={{marginBottom:13,fontSize:15,}}>Email:</Text>
            <Text style={{marginBottom:13,fontSize:15,}}>Senha:</Text>
            </View>
           
            </ScrollView>
            </View>
        );
    }
}