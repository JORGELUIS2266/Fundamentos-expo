import { StyleSheet, View, Text, Image } from 'react-native';


export default function CardImg() {
    return (
        <View style={style.card}>
            <Image style={style.imagen} source={'https://th.bing.com/th/id/R.160a7b38ea3369f457a419'}/>
            <Text style={style.Titulo}>Card con imagen</Text>
            <Text style={style.cont}>Contenido del card</Text>
            <Text style={style.cont}>Jorge luis Hernandez Matra</Text>
        </View>
    );
}

const style = StyleSheet.create({
    card: {

        backgroundColor: '#ffffff',
        padding: 16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#3ddda0ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    Titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cont: {
        fontSize: 16,
        color: '#333333',
        marginTop:4,
    },
    imagen:{
        width:'100%',
        height:150,
        borderRadius:10,
    },
});