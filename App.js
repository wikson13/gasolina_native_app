/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import MainNavigation from './navigation/Navigation'

const App: () => React$Node = () => {
  return (
    <>
      <MainNavigation/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
