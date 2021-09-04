import{StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    // Criamos o grupo de estilo e inserimos o subgrupo alinharTexto
    top : {
      flexDirection: 'row',
    
    },
    paperblack: {
      backgroundColor: "darkcyan",
      marginTop: 240,
      width: "100%",
      height: 280,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
    },
    papelblack:{
      backgroundColor:"#1C1C1C", width:400, height:290,     position: 'absolute',
                justifyContent: 'center'
    },
    papelbranco:{
      backgroundColor: "#1C1C1C",
     marginLeft:0,
      marginTop:0,
      width:400,
            height: 600,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center'
    },
    papel:{
      backgroundColor: "black",
      marginTop: 0,
      opacity:0.4,
      width: "100%",
      height: 520,
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
              
