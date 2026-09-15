import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import webtoons from '../data/webtoons';

/**
 * FLEXBOX USED HERE:
 * - flexDirection: 'row' + flexWrap: 'wrap' -> creates a grid from a flat list
 * - Fixed width per card + gap -> consistent columns regardless of screen size
 */
export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.grid}>
      {webtoons.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate('Detail', { id: item.id })}
        >
          <View style={[styles.cover, { backgroundColor: item.color }]}>
            <Text style={styles.coverInitial}>{item.title.charAt(0)}</Text>
          </View>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.genre}>{item.genre}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const CARD_WIDTH = '30%';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 12,
    gap: 12,
  },
  card: { width: CARD_WIDTH, marginBottom: 12 },
  cover: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverInitial: { color: '#fff', fontSize: 28, fontWeight: '700' },
  title: { marginTop: 6, fontSize: 13, fontWeight: '600', color: '#222' },
  genre: { fontSize: 11, color: '#888' },
});
