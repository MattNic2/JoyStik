import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TopBar from '../../components/TopBar';
import Constants from 'expo-constants';


export default function LibraryScreen({navigation}) {
    return (
        <View style = {styles.container} >
             <TopBar handleProfilePress = {handleProfilePress} handleHomePress={handleHomePress} />  
            <Text>Library Screen</Text>
        </View>
    )

    function handleProfilePress() {
      navigation.navigate('Profile');
   }

   function handleHomePress() {
     navigation.navigate('Home');
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
})


