import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ReaderScreen from '../screens/ReaderScreen';

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerStyle: { backgroundColor: '#4A90D9' }, headerTintColor: '#fff' }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Webtoons' }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Details' }} />
      <Stack.Screen
        name="Reader"
        component={ReaderScreen}
        options={{ headerStyle: { backgroundColor: '#111' }, title: '' }}
      />
    </Stack.Navigator>
  );
}
