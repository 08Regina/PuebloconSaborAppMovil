import React from "react";
import {ScrollView, StyleSheet,Text,TouchableOpacity,Alert,View,Icon,Input, TextInput,StatusBar,Image,Dimensions, ImageBackground} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Funcion Log in
const Login = ({navigation})=>{
  
  const [user,setUser] = React.useState('');
  const [pass,setPws] = React.useState('');
  
  const acceso = () => {

      var URL = 'https://puebloconsaboruthh.com/AppPuebloconSabor/Login.php';
      //var URL='https://172.15.1.21/prueba/loginn.php'
      fetch(URL,{
        method:'POST',
        body: JSON.stringify({
          email : user,
          password : pass,
        }),
        headers:{
          'Accept':'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then((respuesta) => respuesta.json()) //Crear objecto "respuesta " y especificar que es de tipo json, O mejor dicho se obtiene la respuesta y se parsea a JSON.
      .then((respuestaJSON) => {

        if(respuestaJSON == "User_N"){

          Alert.alert('El usuario NO existe!');

        }else if (respuestaJSON == "ok"){

          navigation.navigate('Home')

        }else{
          navigation.navigate('Registro')
        }
      })
      .catch((error)=>{
        console.log(error);
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
                <View style={{padding:30}}>
                    
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
            <TextInput style={styles.textInput} placeholderTextColor='#FA0C7B' keyboardType="email-address" 
            placeholder='Usuario' onChangeText={user =>  setUser(user)}
            value={user}/>

            <View style={styles.InputPws}>

            <TextInput style={{flex:1}} color='#0B0B3B' secureTextEntry={!ShowPassword} placeholderTextColor='#FA0C7B' placeholder='Password'
            onChangeText={pass => setPws(pass)}
            value={pass}/>
            
            <MaterialCommunityIcons style={{paddingHorizontal:10}} name={ShowPassword ? "eye-off":"eye"} color='#FA0C7B' size={20}
            onPress={()=>{
              setShowPassword(!ShowPassword)
            }} 
            />
            </View>
            {/*Boton-*/}
            <TouchableOpacity onPress={()=> acceso()}>
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
      fontSize:14,
      padding:15,
      borderRadius:30,
      width:'80%',
      marginTop:20,
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
        backgroundColor:'#F0640B',
        marginLeft:15,
        marginRight:15,
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
        backgroundColor:'#fff',
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
      
});

export default Login;