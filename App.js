import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, TextInput } from 'react-native';
import Item from './Item'


import { cats, dogs } from './breeds'

export default function App() {
  const [search, setSearch] = useState('')

  return (
    
  <SafeAreaView style={styles.container}> 
      <FlatList style={styles.flatlist}
        data={cats}
        renderItem={({ item, index }) => {
        return <Item title={`${item.breed}`} data={item}/>
      }}
      keyExtractor={item => item.breed}
      />
      
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  flatlist: {
    borderWidth: 10,
    borderColor: 'yellow'
  },
  search: {
    fontSize: 24,
    padding: 10
  }
})
