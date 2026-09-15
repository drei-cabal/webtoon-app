import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Webtoon App</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => alert('Logout pressed')} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee', marginBottom: 10 },
  headerText: { fontSize: 18, fontWeight: '700' },
});
