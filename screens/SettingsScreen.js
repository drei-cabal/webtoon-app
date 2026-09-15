import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/**
 * FLEXBOX USED HERE:
 * - Each row: flexDirection 'row' with an icon, a text column (flex:1), and a chevron
 */
const SETTINGS = [
  { id: 'notifications', label: 'Notifications', icon: 'notifications-outline' },
  { id: 'appearance', label: 'Appearance', icon: 'color-palette-outline' },
  { id: 'downloads', label: 'Downloads', icon: 'download-outline' },
  { id: 'privacy', label: 'Privacy', icon: 'lock-closed-outline' },
  { id: 'about', label: 'About', icon: 'information-circle-outline' },
];

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {SETTINGS.map((item) => (
        <TouchableOpacity key={item.id} style={styles.row}>
          <Ionicons name={item.icon} size={20} color="#4A90D9" style={styles.rowIcon} />
          <View style={styles.rowText}>
            <Text style={styles.label}>{item.label}</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#ccc" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rowIcon: { marginRight: 14 },
  rowText: { flex: 1 },
  label: { fontSize: 15, fontWeight: '600', color: '#222' },
});
