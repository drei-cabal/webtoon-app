import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNav from './navigation/DrawerNav';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
