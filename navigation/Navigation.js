import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Fuel from '../screens/Fuel';
import Service from '../screens/Service';
import Stats from '../screens/Stats';
import Settings from '../screens/Settings';
import colors from '../constants/colors';

import Icon from 'react-native-ionicons';
import {View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AddRefuelling from '../screens/AddRefuelling';
import AddService from '../screens/AddService';

const FuelNavigation = createStackNavigator(
  {
    Fuel: {
      screen: Fuel,
      navigationOptions: {
        headerTitle: 'Paliwo',
      },
    },
    AddRefuelling: {
      screen: AddRefuelling,
      navigationOptions: {
        headerTitle: 'Dodaj tankowanie',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
    },
  },
);

const StatsNavigation = createStackNavigator(
  {
    Stats: {
      screen: Stats,
      navigationOptions: {
        headerTitle: 'Statystyki',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
    },
  },
);

const ServiceNavigation = createStackNavigator(
  {
    Service: {
      screen: Service,
      navigationOptions: {
        headerTitle: 'Serwis',
      },
    },
    AddService: {
      screen: AddService,
      navigationOptions: {
        headerTitle: 'Dodaj serwis',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
    },
  },
);

const SettingsNavigation = createStackNavigator(
  {
    Service: {
      screen: Settings,
      navigationOptions: {
        headerTitle: 'Ustawienia',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primaryColor,
      },
    },
  },
);

const TabNavigation = createBottomTabNavigator(
  {
    Paliwo: {
      screen: FuelNavigation,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="car" />;
        },
      },
    },
    Serwis: {
      screen: ServiceNavigation,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="build" />;
        },
      },
    },
    Statystyki: {
      screen: StatsNavigation,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Icon name="stats" />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primaryColor,
      labelStyle: {
        fontSize: 13,
      },
    },
  },
);

const MainNavigator = createDrawerNavigator({
  Paliwo: TabNavigation,
  // Paliwo:FuelNavigation,
  Serwis: ServiceNavigation,
  Statystyki: StatsNavigation,
  Settings: SettingsNavigation,
});

export default createAppContainer(MainNavigator);
