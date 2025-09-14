import { StyleSheet, View, Platform, StatusBar, Text, TextInput, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
export default function ListaAlumnos() {
    return (
        <SafeAreaView style={styles.main}>
            {/* Inicio de AppBar */}
            <View style={styles.appBar}>
                <Icon name="arrow-left" zize={20} color={'#000'} />
                <Text style = {styles.appBarTitle}>
                    Lista de Usuarios
                </Text>
                <View style = {{width: 20}}></View>

                
            </View>
            {/* Cierre de AppBar */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: { 
        flex: 1,
        backgroundColor: '#41a8fdff',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 44, 
       
    },
    appBar: {
        height:50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d284ffff',
        paddingHorizontal: 16,
        justifyContent: 'space-between',
    },
    

    appBarTitle: {
        fontSize:16,
        fontWeight: 'bold',

    }



});