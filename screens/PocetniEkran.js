import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const PocetniEkran = ({navigation}) => {
  const [brojac, postaviBrojac] = useState(0)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => postaviBrojac((br) => br + 1)}>
          <View>
            <MaterialIcons name='add-circle' size={26} color="black" />
          </View>
        </TouchableOpacity>
      )
    });
  }, [navigation])

  return (
    <View style={stil.ekran}>
      <Text>Početni ekran aplikacije</Text>
      <Text style={stil.brojac}>Vrijednost brojača: {brojac}</Text>
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