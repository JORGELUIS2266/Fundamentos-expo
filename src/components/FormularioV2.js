import { StyleSheet, View, Platform, StatusBar, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const {width} = Dimensions.get('window');

export default function FormularioV2()  {
    return (
        <SafeAreaView style={style.main}>
            <ScrollView>
                <Text style={style.title}>Formulario V2</Text>
                <View style={style.container}>
                    <Image source={{uri:'https://static.wikia.nocookie.net/patoaventuras/images/f/fa/PatoDonald%282017%29.png/revision/latest?cb=20180421215810&path-prefix=es'}} style={style.avatar}/>
                   
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
        backgroundColor: '#ffffffff',
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
});