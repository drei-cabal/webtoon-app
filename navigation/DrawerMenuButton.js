import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';

/**
 * A header button that opens the Drawer navigator.
 * Uses navigation.dispatch(), which bubbles the action up through parent
 * navigators automatically — so this works no matter how deeply nested
 * the screen is inside Drawer > Tab > Stack.
 */
export default function DrawerMenuButton({ color = '#fff' }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      style={styles.button}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Ionicons name="menu" size={24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { paddingHorizontal: 14 },
});
