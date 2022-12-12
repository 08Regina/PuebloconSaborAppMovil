import React,{useState}from "react";
import {ScrollView, StyleSheet,Text, Alert, day, TouchableOpacity,Button,View,Icon,Input, TextInput,StatusBar,Image,Dimensions, ImageBackground} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Funcion Log in
const Registro = ({navigation})=>{

  
  const [nombres, setNombre] = React.useState('');
  const [apellidop, setApaterno] = React.useState('');
  const [apellidom, setAmaterno] = React.useState('');
  const [tel, setTelefono] = React.useState('');
  const [Username, setUsername] = React.useState('');
  const [Correo, setCorreo] = React.useState('');
  const [Password, setPassword] = React.useState('');

  function Registrarme(nombres, apellidop, apellidom, tel, Username, Correo, Password){
      //Alert.alert('Funciona');
      var URL = 'https://puebloconsaboruthh.com/AppPuebloconSabor/registro.php';
        console.log("Nombre => ", nombres, "Apellidop => ", apellidop, "ApellidoM => ", apellidom, "Telefono => ", tel);
      
        fetch(URL,{
          method:'POST',
          body: JSON.stringify({
              Nombre : nombres,
              Apellidop: apellidop,
              ApellidoM: apellidom,
              Telefono: tel,
              Usuario: Username,
              email: Correo,
              password : Password
          }),
          headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json'
          },
      })
      .then((respuesta) => respuesta.json())
      .then((respuestaJSON) => {
         console.log("respuesta json ",respuestaJSON)
         if ((Correo.length==0) || (Password.length==0) || (nombres.length==0) || (apellidop.length==0) || (apellidom.length==0)|| (tel.length==0)|| (Username.length==0)){
            alert("Campos Requeridos");
          }else if (Password.length<8){
            alert("Minimum 08 characters required!!!");
          }
          else if(respuestaJSON == "ok"){
                Alert.alert('Ay un problema, intentelo mas tarde')
              navigation.navigate('Login');
          }else{
            Alert.alert('Registrado')
            navigation.navigate('Login');
          }
      })
      .catch((error) => {
          console.log("error respuesta => ",error);
      }) 

  }

  const [ShowPassword, setShowPassword] = React.useState(false);
        return(
            <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
            <ImageBackground source={require('../../images/Img1.png')}
            style={{height:Dimensions.get('window').height/2.5,}}>
                <View style={{justifyContent:'center',alignItems: 'center', marginTop:15,}}>
                    <Image source ={require('../../images/logotipo-pueblos-con-sabor.png')}
                    style={{width:"50%",height:"90%",}}
                    />
                </View>
            </ImageBackground>
            <View style={{flex:1, backgroundColor:'#ffffff',bottom:28, borderTopStartRadius:40,borderTopEndRadius:40,}}>
                <View style={{padding:15}}>
                    
                </View>
            </View>
           <View style={styles.row}>
                {/*Boton*/}
                <View style={[styles.box, styles.box2]}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                        <Text style = {styles.btn}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.box]}>
                <TouchableOpacity onPress={()=>navigation.navigate("Registro")}>
                    <Text style = {styles.btnr}>
                        Registrate
                    </Text>
                </TouchableOpacity>
                </View>
                
                
           </View>
           {/*Inputs*/}
                   
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Nombre' onChangeText={(nombres) =>setNombre(nombres)}/>
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Apellido Paterno' onChangeText={(apellidop =>setApaterno(apellidop))}/>
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Apellido Paterno' onChangeText={(apellidom) =>setAmaterno(apellidom)}/>
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Telefono' keyboardType="phone-pad" onChangeText={(tel) =>setTelefono(tel)}/>
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Usuario' onChangeText={(Username) =>setUsername(Username)}/>
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' placeholder='Email' keyboardType="email-address" onChangeText={(Correo) =>setCorreo(Correo)}/>
            <View style={styles.InputPws}>

            <TextInput style={{flex:1}} color='#0B0B3B' secureTextEntry={!ShowPassword} placeholderTextColor='#FA0C7B' placeholder='Password' onChangeText={(Password) =>setPassword(Password)}/>
            
            <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='#FA0C7B' size={20}
            onPress={()=>{
              setShowPassword(!ShowPassword)
            }} 
            />
            </View>
            {/*Boton*/}
            <TouchableOpacity onPress={() =>Registrarme(nombres, apellidop, apellidom, tel, Username, Correo, Password)}>
            <Text style = {styles.botton}>
              Ingresar
            </Text>
            </TouchableOpacity>
            
           </ScrollView> 
      
);   
}

const styles = StyleSheet.create({
    
    tittle: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#FA0C7B',
      fontSize: 18,
      padding: 15,
      marginTop:10,
      width: '80%',
      height: 50,
      borderRadius:30,
      color:'#0B0B3B',
      marginLeft:35,
      marginRight:35
    },
    InputPws:{
      borderWidth:1,
      borderColor: '#FA0C7B',
      fontSize:18,
      padding:15,
      borderRadius:30,
      width:'80%',
      marginTop:10,
      height:50,
      color:'#FA0C7B',
      flexDirection:'row',
      alignItems:'center',
      marginLeft:35,
      marginRight:35
      
    },
    botton:{
        borderWidth:1,
        borderRadius:30,
        padding: 10,
        paddingStart: 20,
        width: '80%',
        height: 55,
        marginTop: 20,
        marginBottom:20,
        fontSize:30,
        alignSelf: "center",
        textAlign:"center",
        color:'#0b0b3b',
        fontWeight: "bold",
        borderColor: '#FA0C7B',
        backgroundColor:'#F0640B',
    },
    btn:{
        borderWidth:1,
        borderRadius:30,
        padding: 10,
        paddingStart: 20,
        width: '90%',
        height: 45,
        fontSize:20,
        textAlign:"center",
        color:'#0b0b3b', 
        fontWeight: "bold",
        borderColor: '#FA0C7B',
        backgroundColor:'#fff',
        marginLeft:15,
        marginRight:15
    },btnr:{
        borderWidth:1,
        borderRadius:30,
        padding: 10,
        paddingStart: 20,
        width: '90%',
        height: 45,
        fontSize:20,
        textAlign:"center",
        color:'#0b0b3b', 
        fontWeight: "bold",
        borderColor: '#FA0C7B',
        backgroundColor:'#F0640B',
        marginLeft:5,
        marginRight:25
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
      },
      box: {
        flex: 1,
        height: 70,
        backgroundColor: '#fff',
      },
      box2: {
        backgroundColor: '#fff'
      },
      datePickerStyle: {
        width: 200,
      },
});

export default Registro;