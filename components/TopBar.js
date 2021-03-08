import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function TopBar() {
    return (
        <View style = {styles.container}>
            <FontAwesome5 name ="fire" size ={35} color ="#F06795" />
            <FontAwesome name ="gamepad" size ={35} color ="#F06795" />
            <FontAwesome name ="cog" size ={35} color ="#F06795" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9,
    },
})