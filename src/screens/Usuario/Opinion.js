import { View, Text, StyleSheet, Image, ScrollView ,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
import React from 'react'

const Opinion=({navigation,route})=> {
    const opinion = route.params;
    console.log(opinion);
  return (
    <View >
         <Text>Opinion</Text>
               
    </View>
  )
}
const styles = StyleSheet.create({
    heade: {
        backgroundColor:"#F0640B",
        height:150,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingHorizontal:20
        
    },
    conttyl:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:65,
        width:"100%"
    },
    texthe:{
        fontSize:25,
        color:"#FFF",
        fontWeight:"bold"
    },
    imglo:{
        height:60,
        width:60
    },
    txtTitulo:{
        fontWeight:"bold",
        color:'#FA0C7B',
        textAlign:'center', 
        fontSize:40,
        
    },
    txtinf:{
        color:'#0b0b3b',
        textAlign:'center', 
        fontSize:20,
        
    },
})

export default Opinion