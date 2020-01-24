import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Icon from 'react-native-ionicons';
import ButtonClassic from '../navigation/ButtonClassic';

const Fuel = props => {
    const [mileage, setMileage] = useState(0);
    const [data, setData] = useState(0);
    const [liters, setLiters] = useState(0);
    const [priceLiter, setPriceLiter] = useState(0);
    const [amount, setAmount] = useState(0);

    return (
        <View style={styles.container}>

            <ButtonClassic title='Dodaj tankowanie' onPress={() => {
                props.navigation.navigate('AddRefuelling');
            }} style={{marginTop:5}}/>
        </View>
    );
};

Fuel.navigationOptions = navdata => {
    return {
        headerTitle: 'Paliwo',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="menu"
                    iconName="menu"
                    onPress={() => {
                        navdata.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
});

export default Fuel;
