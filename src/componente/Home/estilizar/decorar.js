import{StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    // Criamos o grupo de estilo e inserimos o subgrupo alinharTexto
    top : {
      flexDirection: 'row',
    
    },
    paperblack: {
      backgroundColor: "black",
      borderWidth: 0.4,
      marginTop: 0,
      width: "100%",
      height: 280,
  
      opacity: 0.8,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
    },
    menus:{
      marginTop:0,
      marginLeft:20,
    },
    rodape:{
      backgroundColor:"cyan"
    },
    botao:{
   borderColor:"cyan",
   borderWidth:1,
   height:40,
   marginTop:150,
   padding:20,
   width:100,
   marginLeft:130,
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius:18
    },
    texto:{
   marginTop:0,
   alignItems:"center",
   padding:40,
    },
  });

  export default styles;
              
