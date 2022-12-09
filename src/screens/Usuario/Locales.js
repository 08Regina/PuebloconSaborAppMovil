import { View, Text, StyleSheet, Image, ScrollView ,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
import React from 'react'

const Locales=({navigation,route})=> {
    const local = route.params;
    console.log(local);
  return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
        <View style={styles.heade}>
               {/*}<Image
                    source={require('../../images/logotipo-pueblos-con-sabor.png')}
                    {/*}style={{
                        height:10,
                        width:20,
                        marginTop:50
                    }}
                />{*/}
            <View style={styles.conttyl}>
                <View style={{width:"65%"}}>
                    <Text style={styles.texthe}>Pueblo Con Sabor</Text>
                </View>
                <View style={{width:"35%",alignItems:"flex-end"}}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={styles.imglo}
                    />
                </View>
            </View>
               
        </View>
        
               {/**/}
        
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
        
        <View style={{padding:20}}>
            <Text style={styles.txtTitulo}>{local.nombre}</Text>

        </View>
        <View style={styles.viewimg}>
        <Image
            source={require('../../images/local.jpg')}
            style={styles.imgmejor}
        />
        </View>
             {/*Boton*/}
             <TouchableOpacity onPress={()=>navigation.navigate("Opinion",local)}>
            <Text style = {styles.botton}>
              Escribir una Opinion
            </Text>
            </TouchableOpacity>
           {/*Boton*/}
           <TouchableOpacity onPress={()=>navigation.navigate("Ruta", local)}>
            <Text style = {styles.botton}>
              Ruta
            </Text>
            </TouchableOpacity>
            
        </ScrollView> 
               
    </View>
  )
}
const styles = StyleSheet.create({
    heade: {
        backgroundColor:"#F0640B",
        height:170,
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
    imgmejor:{
        width:190,
        height:190,
        alignContent:"center",
        alignItems:"center",
    },
    viewimg:{
        justifyContent:'center',
        alignItems: 'center',
         marginTop:15,
    },
    botton:{
        borderWidth:1,
        borderRadius:30,
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 60,
        marginTop: 30,
        fontSize:30,
        alignSelf: "center",
        textAlign:"center",
        color:'#0b0b3b',
        fontWeight: "bold",
        borderColor: '#FA0C7B',
        backgroundColor:'#F0640B',
    },
})

export default Locales