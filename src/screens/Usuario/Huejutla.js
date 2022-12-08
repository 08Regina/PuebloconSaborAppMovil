import { View, Text, StyleSheet, Image, ScrollView ,FlatList,FlasList,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
//import React from 'react';
import React,  { useState, useEffect } from 'react';
import axios from 'axios';
//const baseUrl = 'http://127.0.0.1:8000/api/huejutlas';
const URL='http://192.168.1.69/proyectopuebloconsabor/public/huejutlas'
const Huejutla=({navigation})=> {
    /*const [huejutlas, setHuejutlas]=useState([])
    useEffect(()=>{
        getHuejutla()
    },[])
    const getHuejutla=async()=>{
        const {data}= await axios.get(URL)
        const {huejutlas}=data
        setHuejutlas(huejutlas)
        console.log(data)
    }
    const renderItem = ({item})=>(
        <ItemHuejutla
        Historia={item.Descripcion}
        />
    )*/
    
    const [huejutlas, setHuejutlas]=useState([])
    useEffect(()=>{
        async function getAllHuejutlas(){
            try{
                const huejutlas = await axios.get('https://puebloconsaboruthh.com/api/huejutlas')
                console.log(huejutlas.data)
                setHuejutlas(huejutlas.data)
            }
            catch(error){
                console.log(error)
            }
        }
        getAllHuejutlas()
    }, []);

   
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
                    <Text style={styles.texthe}>Directorio</Text>
                </View>
                <View style={{width:"33%",alignItems:"flex-end"}}>
                    <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                        <Image
                            source={require('../../images/logo.png')}
                            style={styles.imglo}
                        />
                    </TouchableOpacity>
                </View>
            </View>
               
        </View>
        
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
               {/**/}
        <View style={{padding:20}}>
            <Text style={styles.txtTitulo}>Huejutla</Text>

        </View>
               
        
        
            <View style={{padding:20}}>
                
                <FlatList data={huejutlas} 
                renderItem={({item})=><Text style={styles.txtinf}>{item.Historia}</Text>}
                />  
                
            </View>
            <View style={{padding:20}}>
            <Text style={styles.txtTitulo}>* Pueblo con Sabor*</Text>

        </View>
               
            <View style={{padding:20}}>
                
                <FlatList data={huejutlas} 
                renderItem={({item})=><Text style={styles.txtinf}>{item.Descripcion}</Text>}
                />  
            </View>
          
        </ScrollView> 
        
    </View>
  )
}
const styles = StyleSheet.create({
    heade: {
        backgroundColor:"#F0640B",
        height:'20%',
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
        textAlign:'justify', 
        fontSize:20,
        
    },
})

export default Huejutla