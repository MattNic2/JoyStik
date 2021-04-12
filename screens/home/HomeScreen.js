import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import Constants from 'expo-constants';
import TopBar from '../../components/TopBar';
import axios from 'axios'
import SwipeableImage from '../../components/SwipeableImage'
import BottomBar from '../../components/BottomBar'
import Swipes from '../../components/Swipes';

export default function HomeScreen({navigation}) {

   const [games, setGames] = useState([])
   const [currentIndex, setCurrentIndex] = useState(0)
   const swipesRef = useRef(null)

   async function fetchGames() {
         try {
            const { data } = await axios.get('http://10.0.2.2:9000/coverInfo')
            setGames(data)
          //  alert(JSON.stringify(data))
         }  catch (error) {
            console.log("error", error)
            Alert.alert('Error getting users', '', [{text: 'Retry', onPress: () => fetchGames()}])
      }
   }

   useEffect(() => {
      fetchGames()
   }, [])

   function handleLike() {
      console.log('like')
      nextGame()
   }

   function handlePass() {
      console.log('pass')
      nextGame()
   }

   function nextGame() {
      const nextIndex = games.length - 2 == currentIndex ? 0 : currentIndex + 1
      setCurrentIndex(nextIndex)
   }

   function handleLikePress() {
      swipesRef.current.openLeft()
   }

   function handlePassPress(){
      swipesRef.current.openRight()
   }
   function handleLibraryPress(){
      navigation.navigate('Library');

   }
   function handleProfilePress() {
      navigation.navigate('Profile');
   }
   function handleHomePress() {
      navigation.navigate('Home')
   }

   //console.log("games", games)
   return (
      <View style={styles.container}>
      <TopBar handleProfilePress = {handleProfilePress} handleHomePress={handleHomePress} />
       <View style = {styles.swipes}>
          {games?.length > 1 &&
             games.map(
                (u, i) =>
                currentIndex == i && (
                <Swipes 
                   key = {i} 
                   ref={swipesRef} 
                   currentIndex={currentIndex} 
                   games={games} 
                   handleLike={handleLike} 
                   handlePass={handlePass}
                ></Swipes>
                )
             )}
       </View>
       <BottomBar handlePassPress={handlePassPress} handleLikePress={handleLikePress} handleLibraryPress={handleLibraryPress}/>
   </View>
   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: Constants.statusBarHeight,
   },
   swipes: {
      flex: 1,
      padding: 10,
      paddingTop: 8,
      shadowColor: '#000',
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
   },
 });
