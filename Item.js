import React from 'react' 

import { View, Text, StyleSheet } from 'react-native'

function Item(props) {
    const { name } = props
    return (
        <View styles ={styles.container}>
            <Text styles={styles.label}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    label: {
        
    }
})