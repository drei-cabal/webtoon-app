import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackNav from './StackNav';
import ProfileScreen from '../screens/ProfileScreen';
import DrawerMenuButton from './DrawerMenuButton';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // StackNav supplies its own header for the Home tab
        tabBarActiveTintColor: '#4A90D9',
        tabBarIcon: ({ focused, color, size }) => {
          const iconName =
            route.name === 'HomeTab'
              ? focused ? 'home' : 'home-outline'
              : focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNav} options={{ title: 'Home' }} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: true, headerLeft: () => <DrawerMenuButton color="#4A90D9" /> }}
      />
    </Tab.Navigator>
  );
}
