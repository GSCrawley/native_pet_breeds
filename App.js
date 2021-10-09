import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, FlatList } from 'react-native';
import Item from './Item'


import { cats, dogs } from './breeds'

export default function App() {
  return (
    
  <SafeAreaView style={styles.container}> 
    <View style={styles.heading}>
      <FlatList
        data={cats}
        renderItem={({ item, index }) => {
        return <Item title={`${index} ${item.breed}`} data={item}/>
      }}
      keyExtractor={item => item.breed}
      />
      <StatusBar style="auto" />
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginTop: 10
  },
  heading: {
    fontSize: 30,
    // fontFamily: 'monospace',
    color: 'tomato',
    fontWeight: 'bold'
  },
  small: {
    fontSize: 40,
    color:'orange'
  }
});
