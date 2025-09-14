import { StyleSheet, View, Platform, StatusBar, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/FontAwesome';
const {width} = Dimensions.get('window');

export default function FormularioV2()  {
    return (
        <SafeAreaView style={style.main}>
            <ScrollView>
                <Text style={style.title}>Formulario V2</Text>

                <View style={style.container}>
                    <TouchableOpacity style={style.cerrarBoton}>
                        <Icon name="close" size={20} color="#ffffffff"  />
                    </TouchableOpacity>
                    <Image source={{uri:'https://static.wikia.nocookie.net/patoaventuras/images/f/fa/PatoDonald%282017%29.png/revision/latest?cb=20180421215810&path-prefix=es'}} style={style.avatar}/>
                   <Text style={style.name}>Jorge Luis Hernandez Matra</Text>
                   <View style={style.infoContainer}>
                     <Text style={style.label}>Carrera</Text>
                    <Text style={style.info}>Sistemas Computacionales</Text>
                     <Text style={style.label}>Especialidad</Text>
                    <Text style={style.info}>Desarrollo de Software</Text>
                    <Text style={style.label}>correo</Text>
                     <Text style={style.info}>yo.hemati2322@gmail.com</Text>
                     <Text style={style.label}>Telefono</Text>
                    <Text style={style.info}>9532113373</Text>
                    <Text style={style.label}>N.C</Text>
                    <Text style={style.info}>22620235</Text>
                </View>

                   <TouchableOpacity style={style.botonGrandeiCON}>
                                             
                 <Icon name="save" size={20} color="#ffffff" style={style.iconIZQ} />
                 <Text style={style.textoBotonGrande}>Guardar</Text>
                 </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    title: {    
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: '#070707ff',
        marginBottom:10,
    },
    main: {
        flex: 1,
        backgroundColor: '#31a0c2ff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 16
    },
    Texto: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#000000ff',
    },
    avatar:{
        width: 200,
        height: 200,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 20,
    }
    ,
    container:{
        width: '100%',
        backgroundColor: '#ebe8e8ff',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,

    },
    avatar:{
        width:width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: '#ffffff',

    },
    name:{
        fontSize: 17,
        color: '#ffffffff',
        fontWeight: 'bold',
        marginBottom: 10,
        borderRadius:20,
        backgroundColor: '#ff0000ff',
        padding: 5,
        

    }, 
    infoContainer:{
        width: '100%',
        marginBottom: 15,
        
    }, 
    label:{
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 10,
    },  
    info:{
        fontSize: 16,
        marginBottom: 10,
        borderRadius:15,
        backgroundColor: '#cacacaff',
        padding: 10,

    },
     textoBotonGrande: {
        color: '#000000ff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botonGrandeiCON: {
        backgroundColor: '#6a9effff', 
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
        width  : '100%',
    },
    iconIZQ: {
        marginLeft: 15, 
        marginTop: 3,
        alignSelf: 'center',
    },
    cerrarBoton: {
        position: 'absolute',
        top: 10,
        right:15,
        //zIndex: 10,
        borderRadius:30,
        backgroundColor: '#9c0303ff',
        width:30,
        justifyContent:'center',
        alignItems:'center',
        elevation:3,



    },



});