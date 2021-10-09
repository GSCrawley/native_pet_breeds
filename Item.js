import React from 'react' 

import { View, Text, StyleSheet } from 'react-native'

export default function Item({ title, data }) {
    const breeds = Object.keys(data).filter((key) => {
        return key !== 'breed'
    })

	return (
		<View style = {styles.item}>
			<Text style={styles.text}>{title}</Text>
            {breeds.map((key) => {
                return <Text>{key}:{data[key]}</Text>
            })}
		</View>
	);
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 25, 
        padding: 20, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 28, 
        margin:10,
        justifyContent: 'center',  
        color: 'darkblue' 
    }
})

