import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, FlatList } from 'react-native';
import Item from './Item'


import { cats } from './breeds'

export default function App() {
  return (
    // 
    //   {/* <ScrollView>
    //       {cats.map((item, index) => {
    //           return <Item title={`${index} ${item.breed}`} />
	  //       })}
    //   </ScrollView>
    //     </SafeAreaView> */}
  <SafeAreaView style={styles.container}> 
    <View >
      <FlatList
        data={cats}
        renderItem={({ item, index }) => {
        return <Item title={item.breed} index={index} />
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
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
