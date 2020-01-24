import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import colors from '../constants/colors'
import ButtonClassic from '../navigation/ButtonClassic';

const Service = (props) => {
    return (
        <View style={styles.container}>
            <ButtonClassic title='Dodaj serwis'  onPress={() => {
                props.navigation.navigate('AddService');
            }} style={{marginTop:5}}/>
        </View>
    );
};

const styles=StyleSheet.create({
    container:{
        margin:10
    }
})

export default Service;
