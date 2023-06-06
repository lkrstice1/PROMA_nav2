import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetaljiEkran = () => {
  return (
    <View style={stil.ekran}>
      <Text>Ekran sa detaljima</Text>
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

export default DetaljiEkran;
