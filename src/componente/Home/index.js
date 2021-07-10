
  import React from 'react';
  import { View, Text, Button } from 'react-native';
   import Site from './Site'
  function Home({navigation}) {
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Site/>
              
          
          </View>
      );
  }

  export default Home;