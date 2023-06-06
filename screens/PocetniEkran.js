import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PocetniEkran = ({navigation}) => {
  return (
    <View style={stil.ekran}>
      <Text>Početni ekran aplikacije</Text>
      <Button title="Popis radova" onPress={() => navigation.navigate("Popis")} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PocetniEkran;