import React from 'react';
import { View, Text, Button } from 'react-native';

function Lista({navigator}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre</Text>
            <Button 
            title="Click"
        
        onPress={() =>navigator.navigate('Home')}/>
           
        
        </View>
    );
}

export default Lista;