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

            {/* Inicio de contenido(Lista de alumnos) */}
            <ScrollView >
                <Text style={styles.sectionTitle} >Lista de Alumnos</Text>
                <View style={styles.card}> 
                     <Image source={{uri:'https://static.wikia.nocookie.net/patoaventuras/images/f/fa/PatoDonald%282017%29.png/revision/latest?cb=20180421215810&path-prefix=es'}} style={styles.avatar}/>
                     <View style={styles.cardInfo}>
                        <Text style={styles.UserName} >Jorge Luis Hernandez Matra</Text>
                        <Text style={styles.UserDetails} >ING. Sistemas Computacionales</Text>
                     </View>
                
                </View>
                
            </ScrollView>
            {/* cierre de contenido (Lista de Alumnos) */}
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

    },
    card: {},
    card: {},
    UserName:{},
    UserDetails:{},





});