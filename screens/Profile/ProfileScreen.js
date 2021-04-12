import * as React from 'react';  
import { View, Image, Text, StyleSheet } from 'react-native';  
import Constants from 'expo-constants';
import TopBar from '../../components/TopBar';

export default function ProfileScreen({navigation}) { 

    function handleProfilePress() {
        navigation.navigate('Profile');
     }
  
     function handleHomePress() {
       navigation.navigate('Home');
     }

    return (
        <View>

        <View style = {styles.topBar}>
            <TopBar handleProfilePress = {handleProfilePress} handleHomePress={handleHomePress} />  
        </View>

        <View style ={styles.container}>

        <Image source = {require ('../../images/Userpro.jpg')}
        style = {{width: 130, height: 150}}/>

        <Text style= {styles.textPrimary}>{'\n'}{'\n'}Following:</Text>

        <Text style= {styles.textPrimary}>{'\n'}{'\n'}Followers:</Text>
        
        <Text style= {styles.textPrimary}>{'\n'}{'\n'}Comments:</Text>
        
        <Text style= {styles.textPrimary}>{'\n'}{'\n'}Liked:</Text>
        
        <Text style= {styles.textPrimary}>{'\n'}{'\n'}Swiped:</Text>
        </View>
    </View>
    )
    
    }


const styles = StyleSheet.create({
    container: {
        height: '100%',
       backgroundColor:'gray',
       alignItems:'center',
       fontSize: 32, 
       paddingTop: 90,
       marginTop: Constants.statusBarHeight,
    },

    photo: {
        height: 100,
        borderRadius: 20,
    },

    topBar: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    }
 })