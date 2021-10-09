import React from 'react' 

import { View, Text, StyleSheet } from 'react-native'

function Item({ title }) {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
}


// function Item(props) {
//     const { data, index } = props
//     const { breed } = data
//     const keys = Object.keys(data)
//     return (
//         <View styles={styles.container}>
//             <Text styles={styles.label}>{index}: {breed}</Text>
//         </View>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 80, 
        padding: 40, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'lightblue'
    },
    label: {
        fontSize: 32, 
        margin:20,
        justifyContent: 'center',  
        color: 'darkblue' 
    }
})

export default Item
