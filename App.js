import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
// import * as Font from 'expo-font';

import { cats } from './breeds'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data = {cats}

        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 50,
    // fontFamily: 'monospace',
    color: 'tomato',
    fontWeight: 'bold'
  },
  small: {
    fontSize: 40,
    color:'orange'
  }
});
