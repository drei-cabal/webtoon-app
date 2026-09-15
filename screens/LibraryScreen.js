import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import webtoons from '../data/webtoons';

/**
 * FLEXBOX USED HERE:
 * - Each row: flexDirection 'row' with a color swatch + text column (flex:1)
 */
export default function LibraryScreen() {
  return (
    <FlatList
      style={styles.container}
      data={webtoons.slice(0, 3)} // pretend these are "saved"
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <View style={[styles.swatch, { backgroundColor: item.color }]} />
          <View style={styles.rowText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.genre}>{item.genre}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  swatch: { width: 44, height: 44, borderRadius: 8 },
  rowText: { flex: 1, marginLeft: 12 },
  title: { fontSize: 15, fontWeight: '600' },
  genre: { fontSize: 12, color: '#888' },
});
