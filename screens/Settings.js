import React, {useState} from 'react';
import {View, Text,Switch} from "react-native";
import colors from '../constants/colors'
import  {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import Fuel from './Fuel';
import Icon from 'react-native-ionicons';

const Settings = () => {
    const [switchVal, setSwitchVal] = useState(false);

    return (
        <View>
            <View>
            <Text>Settings</Text>
            <Switch value={switchVal} onValueChange={(newValue)=>setSwitchVal(newValue)} trackColor={{true:colors.primaryColor}} thumbColor={colors.primaryColor}/>
            </View>
        </View>
    );
};

Settings.navigationOptions=navdata=>{
    return{
        headerTitle:'Paliwo',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='back' iconName='arrow-round-back' onPress={()=>alert('goBack')}/>
        </HeaderButtons>
    }}

export default Settings;
