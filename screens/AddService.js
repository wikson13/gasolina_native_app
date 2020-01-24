import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import ButtonClassic from '../navigation/ButtonClassic';

const AddService = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Tytuł</Text>
            <TextInput style={styles.input} value={'opis'}/>
            <Text style={styles.label}>Opis</Text>
            <TextInput style={styles.input} value={'opis'}/>
            <Text style={styles.label}>Przebieg</Text>
            <TextInput style={styles.input} value={'opis'}/>
            <Text style={styles.label}>Data</Text>
            <TextInput style={styles.input} value={'opis'}/>
            <Text style={styles.label}>Zapłacono</Text>
            <TextInput style={styles.input} value={'opis'}/>
            <ButtonClassic title='Dodaj serwis'/>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        marginTop:15
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor:'#bbbbbb',
        padding:0
    },
});


export default AddService;
