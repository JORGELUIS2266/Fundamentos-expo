import { StyleSheet, View, Text, Platform, StatusBar } from "react-native";

export default function ListaAlumnos() {
    return (
        <View style={styles.main}>
            <Text>Lista de Alumnos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: { 
        flex: 1,
        backgroundColor: '#1d98fdff',
        paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 44, 
        padding: 16
    },
});