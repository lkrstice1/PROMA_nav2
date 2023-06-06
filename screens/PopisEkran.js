import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { RADOVI } from '../data/test-podaci';

const PopisEkran = () => {
  const prikazElelementa = (podaci) => {
    return (
      <View style={stil.popisElement}>
        <Text>{podaci.item.student}</Text>
      </View>
    );
  };
  return (
    <View style={stil.ekran}>
      <Text>Ekran sa popisom studenata</Text>
      <FlatList data={RADOVI} renderItem={prikazElelementa} />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  popisElement: {
    padding: 20,
    marginHorizontal: 10,
    marginVertical:15,
    borderColor: "black",
    borderWidth: 1,
  }
});

export default PopisEkran;
