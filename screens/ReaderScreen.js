import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

/**
 * FLEXBOX USED HERE:
 * - Each "panel" is flexDirection: column with justifyContent/alignItems
 *   centering placeholder text — stands in for comic art.
 */
export default function ReaderScreen({ route }) {
  const { title } = route.params;
  const panels = [1, 2, 3, 4, 5];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {panels.map((n) => (
        <View key={n} style={styles.panel}>
          <Text style={styles.panelText}>Panel {n}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111' },
  header: { color: '#fff', fontSize: 16, fontWeight: '700', padding: 16 },
  panel: {
    height: 300,
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelText: { color: '#666', fontSize: 18, fontWeight: '600' },
});
