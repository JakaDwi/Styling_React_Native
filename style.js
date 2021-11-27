import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'white',
      margin:10
      },
      gambar: {
        width:20,
        height:20,
        margin:10,
      },
      gambarProfil: {
        width:70,
        height:70,
        borderRadius:80/2
      },
      textProfil: {
        fontWeight:'bold',
        fontSize:25,
        color:'black'
      },
      keteranganProfil: {
        fontSize:15,
        color:'black'
      },
      textBio: {
        fontSize:13,
        color:'blue'
      },
      viewRow: {
        backgroundColor:'white',
        flex:1,
        flexDirection:'row'
      },
      viewGambar: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      gridGambar: {
        width:100,
        height:100,
        borderColor:'black'
      }
    });

  export {style};