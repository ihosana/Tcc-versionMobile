import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo'

export default function Button({size, color}){
 return(
     <View style={style.start}>
     <Icon name= 'plus' color={color} size={size} />
          </View>
 );
}
const style = StyleSheet.create({
    start:{
        width:60,
        height:60,
        
        borderRadius:50,
        backgroundColor:"darkcyan",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20
    }
})