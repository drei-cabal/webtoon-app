import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import webtoons from '../data/webtoons';

/**
 * COVER DISPLAY — bare minimum approach:
 * Uses the built-in React Native <Image> component with a remote URL
 * (via { uri: ... }) rather than a bundled local file. This is deliberate:
 * Expo Snack's GitHub importer can fail on binary asset files, so a
 * remote-URL image keeps the project Snack-safe with zero binary assets.
 * There is no photo picker wired up here on purpose — see the OPTIONAL
 * block below if you want the user to actually choose/crop a real photo.
 */

// ---------------------------------------------------------------------
// OPTIONAL: real photo picking + built-in crop editor.
// Requires: npx expo install expo-image-picker
// To enable: uncomment this block, uncomment the import at the top,
// and swap the "Edit Cover" button's onPress from `cycleCover` to `pickCoverImage`.
// ---------------------------------------------------------------------
// import * as ImagePicker from 'expo-image-picker';
//
// const pickCoverImage = async (setCoverUri) => {
//   const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   if (!permission.granted) {
//     alert('Allow photo access to change the cover.');
//     return;
//   }
//   const result = await ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     allowsEditing: true, // opens the OS's built-in crop/zoom editor
//     aspect: [3, 4],
//     quality: 0.8,
//   });
//   if (!result.canceled) {
//     setCoverUri(result.assets[0].uri);
//   }
// };

export default function DetailScreen({ route, navigation }) {
  const { id } = route.params;
  const webtoon = webtoons.find((w) => w.id === id);
  const [coverUri, setCoverUri] = useState(null); // null = show placeholder color box

  // Bare-minimum stand-in for "editing" the cover: no picker, just a demo
  // of <Image> rendering a real photo once a uri exists. Uses a remote
  // placeholder image (no local binary asset) so Snack import works
  // cleanly. Replace this with pickCoverImage(setCoverUri) if you enable
  // the optional block above.
  const cycleCover = () => {
    setCoverUri('https://picsum.photos/seed/' + webtoon.id + '/300/400');
  };

  return (
    <View style={styles.container}>
      {coverUri ? (
        <Image source={{ uri: coverUri }} style={styles.cover} />
      ) : (
        <View style={[styles.cover, { backgroundColor: webtoon.color }]}>
          <Text style={styles.coverInitial}>{webtoon.title.charAt(0)}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.editButton} onPress={cycleCover}>
        <Text style={styles.editButtonText}>Edit Cover</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{webtoon.title}</Text>
      <Text style={styles.genre}>{webtoon.genre}</Text>
      <Text style={styles.synopsis}>{webtoon.synopsis}</Text>

      <TouchableOpacity
        style={styles.readButton}
        onPress={() => navigation.navigate('Reader', { title: webtoon.title })}
      >
        <Text style={styles.readButtonText}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  cover: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverInitial: { color: '#fff', fontSize: 48, fontWeight: '700' },
  editButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  editButtonText: { fontWeight: '600', color: '#333' },
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
