import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UnosEkran = () => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran za unos novih podataka</Text>
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

export default UnosEkran;