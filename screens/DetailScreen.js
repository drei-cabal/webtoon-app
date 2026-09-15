import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import webtoons from '../data/webtoons';

export default function DetailScreen({ route, navigation }) {
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

      <TouchableOpacity
        style={styles.readButton}
        onPress={() => navigation.navigate('Reader', { title: webtoon.title })}
      >
        <Text style={styles.readButtonText}>Start Reading</Text>
      </TouchableOpacity>
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
  readButton: {
    marginTop: 20,
    backgroundColor: '#4A90D9',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  readButtonText: { color: '#fff', fontWeight: '700', fontSize: 15 },
});
