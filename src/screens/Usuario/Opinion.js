import { View, Text, StyleSheet, Image, ScrollView ,TextInput,Alert, LinearGradient, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react';
import axios from 'axios' 

const Opinion=({navigation,route})=> {
    const opiniones = route.params;
    console.log(opiniones);

    const [Titulo, setTituloO] = React.useState('');
    const [Opinion, setOpinions] = React.useState('');
    const [Recomendacion, setRecom] = React.useState('');

  function misopiniones(Titulo, Opinion, Recomendacion){
      //Alert.alert('Funciona');
      var URL = 'https://puebloconsaboruthh.com/AppPuebloconSabor/opinion.php';
        console.log("Titulo => ", Titulo, "Opinion => ", Opinion, "Recomendacion => ", Recomendacion);
      
        fetch(URL,{
          method:'POST',
          body: JSON.stringify({
              titulo : Titulo,
              opinion: Opinion,
              recomendacion: Recomendacion
          }),
          headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json'
          },
      })
      .then((respuesta) => respuesta.json())
      .then((respuestaJSON) => {
         console.log("respuesta json ",respuestaJSON)
         if ((Titulo.length==0) || (Opinion.length==0) || (Recomendacion.length==0)){
            alert("Campos Requeridos");
          }
          else if(respuestaJSON == "ok"){
                Alert.alert('Ay un problema, intentelo mas tarde')
              navigation.navigate('Local');

          }else{
            Alert.alert('Registrado')
            navigation.navigate('Opinion',opiniones);
          }
      })
      .catch((error) => {
          console.log("error respuesta => ",error);
      }) 

  }

  return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
         <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
            <View style={styles.heade}>
               
                <View style={styles.conttyl}>
                    <View style={{width:"65%"}}>
                        <Text style={styles.texthe}>Opinion</Text>
                    </View>
                    <View style={{width:"35%",alignItems:"flex-end"}}>
                        <TouchableOpacity >
                            <Image
                                source={require('../../images/logo.png')}
                                style={styles.imglo}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
               
            </View>
        
                {/**/}
            <View style={{marginTop:15}}>
                <Text style={styles.txtTitulo}>{opiniones.nombre}</Text>  
                <Text style={styles.txtcal}>{opiniones.descripcion}</Text>
            </View>
            <View style={styles.contInp}>
            <Text style={styles.txtsub}>Titulo de tu Opinion</Text>
                <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Titulo de tu Opinion'
                onChangeText={(Titulo) =>setTituloO(Titulo)}/>
                
                <Text style={styles.txtsub}>Tu Opinion</Text>
                <TextInput style={styles.textInput}  placeholderTextColor='#FA0C7B' placeholder='Ingresa tu Opinion'
                onChangeText={(Opinion) =>setOpinions(Opinion)}/>
                
                
                <View style={styles.row}>
                {/*Boton*/}
               
                {/*}<View style={[styles.box]}>
                        <Text> {chosenOption}</Text>
                    <RadioForm
                        radio_props={options}
                        initial={2} //initial value of this group
                        onPress={(value) => {
                        setChosenOption(value);
                        }} //if the user changes options, set the new value
                    />
                
                </View>{*/}
              
                  
               </View>

               <Text style={styles.txtsub}>¿Que platillos recomienda?</Text>
               <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Platillo que recomienda'
               onChangeText={(Recomendacion) =>setRecom(Recomendacion)}/>



                 {/*Boton*/}
                    <TouchableOpacity onPress={() =>misopiniones(Titulo, Opinion, Recomendacion)}>
                    
                    <Text style = {styles.botton}>
                    Registrar
                    </Text>
                    </TouchableOpacity>
            </View>
            
        </ScrollView> 
               
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

    contInp:{
        marginTop:20,
        marginLeft:35,
        marginRight:35,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#FA0C7B',
        fontSize: 18,
        padding: 15,
        marginTop:10,
        width: '95%',
        height: 50,
        color:'#0B0B3B',
        marginLeft:10,
        marginRight:10
      },
      radib: {
        borderColor: '#FA0C7B',
        fontSize: 5,
        marginTop:10,
        width: '80%',
        height: 50,
        color:'#0B0B3B',
        marginLeft:15,
        marginRight:15
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
    txtcal:{
        fontWeight:"bold",
        color:'#010D52',
        textAlign:'justify', 
        marginTop:10,
        marginLeft:35,
        marginRight:35,
        fontSize:17,
        
    },
    txtsub:{
        marginTop:5,
        color:'#0b0b3b',
        textAlign:'justify', 
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
        
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
      box: {
        flex: 1,
        height: 150,
        backgroundColor: '#fff',
      },
      box2: {
        backgroundColor: '#fff'
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

export default Opinion