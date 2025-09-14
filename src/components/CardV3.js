
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CardV3() {
    return (
        <View style={style.card}>
            <Image style={style.imagen} source={'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Faabelizabeth%2Fpato-donald%2F&psig=AOvVaw0Pv_2hRZj7tLEagqUOgFGN&ust=1757792830830000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKi-s7-B1I8DFQAAAAAdAAAAABAE' } />
            <View style={style.cardC}>
                <Text style={style.Titulo}>Card con imagen</Text>
                <Text style={style.cont}>Contenido del card</Text>
                <Text style={style.cont}>Jorge luis Hernandez </Text>
                <TouchableOpacity style={style.botonG}>
                    <Text style={style.textoBotonG}>Boton</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    card: {

        backgroundColor: '#ffffff',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#3ddda0ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 },


    },
    cardC: {
        padding: 16,
        backgroundColor: '#4bad95ff',

    },
    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cont: {
        fontSize: 16,
        color: '#333333',
        marginBottom: 12,

    },
    imagen: {
        width: '100%',
        height: 180,
        // borderRadius:10,

    },
    botonG: {
        marginTop: 10,
        backgroundColor: '#000000ff',
        paddingVertical: 14,
        paddingHorizontal:18,
        borderRadius: 10,
        alignSelf:'flex-start',
    },
    textoBotonG: {
        textAlign: 'center',
        color: '#f0f0f0ff',
        fontWeight:'bold',
        fontSize:12,

    },
});