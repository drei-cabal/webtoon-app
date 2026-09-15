import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackNav from './StackNav';
import LibraryScreen from '../screens/LibraryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // StackNav supplies its own header for the Home tab
        tabBarActiveTintColor: '#4A90D9',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Library') iconName = focused ? 'bookmark' : 'bookmark-outline';
          else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={StackNav} options={{ title: 'Home' }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: true }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}
