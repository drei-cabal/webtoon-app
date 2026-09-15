import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNav from './TabNav';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerActiveTintColor: '#4A90D9' }}
    >
      <Drawer.Screen name="MainTabs" component={TabNav} options={{ title: 'Home' }} />
    </Drawer.Navigator>
  );
}
