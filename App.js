import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import UnosEkran from './screens/UnosEkran';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Naslovna" component={PocetniEkran} />
        <Stack.Screen name="Popis" component={PopisEkran} />
        <Stack.Screen name="Detalji" component={DetaljiEkran} />
        <Stack.Screen name="Unos" component={UnosEkran} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
