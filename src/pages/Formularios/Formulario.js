import { StyleSheet, View, Platform, StatusBar, Text, TextInput, ScrollView,TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Formulario() {
    return (
        <SafeAreaView style={style.main}>
            <ScrollView>
                <Text style={style.title}>Registro de Alumnos</Text>

                <Text style={style.Texto}>Nombre:</Text>
                <TextInput style={style.Input} placeholder="Ingrese su nombre"/>
                <Text style={style.Texto}>carrera:</Text>
                <TextInput editable={true} style={style.Input} placeholder="Ingrese su carrera"/>

                <Text style={style.Texto}>Descripcion:</Text>
                <TextInput multiline={true} numberOfLines={4} style={[style.Input, style.textArea]} placeholder="Describe tu personalidad"/>
                <Text style={style.Texto}>Correo Electronico:</Text>
                <TextInput style={style.Input} placeholder="Ingrese su correo" keyboardType="email-address"/>
                <Text style={style.Texto}>Contraseña:</Text>
                <TextInput style={style.Input} placeholder="*********" secureTextEntry/>
                <Text style={style.Texto}>Telefono:</Text>
                <TextInput style={style.Input} placeholder="123456" keyboardType="phone-pad"/>

                {/* Boton Grande con icono */}
                        <TouchableOpacity style={style.botonGrandeiCON}>
                          
                          <Icon name="send" size={20} color="#ffffff" style={style.iconIZQ} />
                          <Text style={style.textoBotonGrande}>Boton Grande</Text>
                        </TouchableOpacity>
                
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
    Input: {
        borderWidth: 1,
        borderColor: '#080808ff',
        height: 40,
        marginTop: 20,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#ffffffff'
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top'
    },
    textoBotonGrande: {
        color: '#ffffffff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botonGrandeiCON: {
        backgroundColor: '#7ed8c9ff', 
        marginTop: 10,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 15,
    },
    iconIZQ: {
        marginLeft: 15, 
        marginTop: 3,
        alignSelf: 'center',
    },
    
});