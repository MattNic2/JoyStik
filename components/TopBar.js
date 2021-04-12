import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function TopBar( {handleProfilePress, handleHomePress} ) {
    return (
        <View style = {styles.container}>
            
            <TouchableOpacity>
                <FontAwesome name ="fire" size ={20} color ="#F06795" onPress={handleHomePress} />
            </TouchableOpacity>

                <FontAwesome name ="gamepad" size ={20} color ="#F06795" />

            <TouchableOpacity>
                <FontAwesome name ="user" size = {20} color ="#F06795" onPress={handleProfilePress} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
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