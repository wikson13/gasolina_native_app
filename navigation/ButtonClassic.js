import React from 'react';
import {Button, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {Text} from 'react-native-paper';
const ButtonClassic = (props) => {
    return <TouchableOpacity style={{...styles.buttonClassic,...props.style}} onPress={props.onPress}><Text style={styles.text}>{props.title}</Text></TouchableOpacity>;
};

const styles = StyleSheet.create({
    buttonClassic:{
        backgroundColor:colors.primaryColor,
        paddingVertical:10,
        borderRadius:4,
        marginVertical:20

    },
    text:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'700'
    }
})

export default ButtonClassic;
