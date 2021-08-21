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
      height: 520,
      opacity: 0.6,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
    },
    menus:{
      marginTop:0,
      marginLeft:20,
      color:"white",
    },
    rodape:{
      backgroundColor:"cyan"
    },
    botao:{
   borderColor:"white",

   borderWidth:1,
   height:70,
   marginTop:230,
   padding:20,
   width:130,
   marginLeft:118,
   position: 'absolute',
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius:16,
    },
    texto:{
   marginTop:0,
   alignItems:"center",
   padding:40,
    },
  });

  export default styles;
              
