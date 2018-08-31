import { StyleSheet, View } from 'react-native';
export const ViewStyles = StyleSheet.create({
    container: {
        flex:1,    
        backgroundColor: '#fff',    
        flexDirection: 'column',
        padding:10    
      },
      checkBox:{
          padding:10
      },
      pageTitle:{
        fontSize:19, 
        alignSelf:'center'
      },
      divider:{
        height:1
      },
      subTitle:{
          fontSize:11, 
          alignSelf:'flex-start', 
          fontWeight:'bold'
        },
      text:{  
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#005678'      
      },
      button:{
        backgroundColor: "#4281ce",
        width: 300,
        height: 45,                      
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        padding: 10,
        alignSelf:'center'
      }
});