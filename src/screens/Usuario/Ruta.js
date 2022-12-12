import React from "react";
import { View, Text, StyleSheet, Image, ScrollView ,TextInput, LinearGradient, TouchableOpacity} from 'react-native'
import MapView, { Callout, Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

const Ruta=({navigation,route})=> {

    const local = route.params;
  
    const [pin, setPin] = React.useState({
        latitude: 21.13293,
        longitude: -98.410035,
    });

    const Restaurante = {
        latitude: parseFloat(local.latitud),
        longitude: parseFloat(local.longitud),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    React.useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log(location);
    
          setPin({
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
          });
          
        })();
    }, []);

  return (
    <View style={{
        backgroundColor:"#FFF",
        flex:1
    }}>
         <ScrollView style={{flex:1,backgroundColor:'#ffffff'}} 
            showsVerticalScrollIndicator={false}>
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
                        <Text style={styles.texthe}>Ruta</Text>
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
            <View style={{padding:20}}>
                <Text style={styles.txtTitulo}>Mapa</Text>
            </View>
               
        </ScrollView> 

        <MapView 
            style={styles.map} 
            initialRegion={{
            latitude: parseFloat(local.latitud),
            longitude: parseFloat(local.longitud),
            latitudeDelta: 0.0006,
            longitudeDelta: 0.0006,
            }}
            showsUserLocation={true}>

                <Marker 
                    coordinate={Restaurante}
                    title={local.nombre}     
                >
                </Marker>

                <MapViewDirections
                    origin={pin}
                    destination={Restaurante}
                    strokeWidth={4}
                    apikey={"AIzaSyBSZiSJ6ltkfN6MlcCJfTIHbcsDQaKZkV0"}
                    
                />
            
        </MapView>
               
    </View>
  )
}
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
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

export default Ruta