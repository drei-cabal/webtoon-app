import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="MainTabs" component={TabNav} options={{ title: 'Home' }} />
    </Drawer.Navigator>
  );
}
