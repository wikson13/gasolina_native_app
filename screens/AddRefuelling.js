import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import ButtonClassic from '../navigation/ButtonClassic';

const AddRefuelling = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Przebieg</Text>
      <TextInput
        style={styles.input}
        value={'0'}
        keyboardType="number-pad"
        returnKeyType="next"
      />
      <Text style={styles.label}>Data</Text>
      <TextInput style={styles.input} value={'0'} />
      <Text style={styles.label}>Zatankowano</Text>
      <TextInput style={styles.input} value={'0'} keyboardType="decimal-pad" />
      <Text style={styles.label}>Cena za litr</Text>
      <TextInput style={styles.input} value={'0'} keyboardType="decimal-pad" />
      <Text style={styles.label}>Zapłacono</Text>
      <TextInput style={styles.input} value={'0'} keyboardType="decimal-pad" />
      <ButtonClassic title="Dodaj tankowanie" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  label: {
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    padding: 0,
  },
});

export default AddRefuelling;
