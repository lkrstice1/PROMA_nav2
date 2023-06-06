import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PocetniEkran from './screens/PocetniEkran';
import PopisEkran from './screens/PopisEkran';
import DetaljiEkran from './screens/DetaljiEkran';
import UnosEkran from './screens/UnosEkran';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const tabOptions = ({route}) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let imeIkone;
    if(route.name === 'Naslovna') {
      imeIkone = focused
        ? 'home'
        : 'home-outline';
    } else if (route.name === 'Detalji') {
      imeIkone = focused ? 'list-circle' : 'list-circle-outline';
    }
    return <Ionicons name={imeIkone} size={size} color={color} />
  },
  tabBarActiveTintColor: 'green',
  tabBarInactiveTintColor: 'red',
  }
);

const TabEkrani = () => {
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
        <Tab.Screen name="Popis" component={PopisEkran} />
        <Tab.Screen name="Unos" component={UnosEkran} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Naslovna" component={PocetniEkran} />
        <Stack.Screen name="Radovi" component={TabEkrani} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
