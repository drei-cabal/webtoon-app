import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import webtoons from '../data/webtoons';

const PANELS = [1, 2, 3];

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const webtoon = webtoons.find((w) => w.id === id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={[styles.cover, { backgroundColor: webtoon.color }]}>
        <Text style={styles.coverInitial}>{webtoon.title.charAt(0)}</Text>
      </View>

      <Text style={styles.title}>{webtoon.title}</Text>
      <Text style={styles.genre}>{webtoon.genre}</Text>
      <Text style={styles.synopsis}>{webtoon.synopsis}</Text>

      {PANELS.map((n) => (
        <View key={n} style={styles.panel}>
          <Text style={styles.panelText}>Panel {n}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  cover: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverInitial: { color: '#fff', fontSize: 48, fontWeight: '700' },
  title: { fontSize: 22, fontWeight: '700', marginTop: 16 },
  genre: { fontSize: 13, color: '#888', marginTop: 2 },
  synopsis: { fontSize: 14, color: '#444', marginTop: 12, lineHeight: 20 },
  panel: {
    height: 180,
    marginTop: 12,
    borderRadius: 8,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panelText: { color: '#666', fontSize: 16, fontWeight: '600' },
});
