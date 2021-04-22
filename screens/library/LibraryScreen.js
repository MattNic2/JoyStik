import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import TopBar from '../../components/TopBar';

import {
    retrieveLikedGames,
    retrieveDislikedGames
} from "../../api/game-store";

import axios from 'axios';
import Constants from 'expo-constants';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator, Row, Right } from 'native-base';
import { greaterThan } from 'react-native-reanimated';

function getGameCover(game){
  if(typeof game.cover !== "object"){
      return game.cover
  }
  else return game.cover.url.replace('t_thumb', 't_1080p_2x')
}

function getGamePlatform(game){
  if(typeof game.platforms !== "object"){
      return game.platforms
  }
  else return game.platforms.abbreviation
}

class GamesList extends Component {
  state = {
    games: []
  }
  componentDidMount = async ()=>{
    var games = await this.props.retrieveGames();
    this.setState({ games: games });
  }
  render(){
    const games = this.state.games;
    if(games.length){
      console.log("games:", games[0].checksum);
    }

    const title = this.props.title;
    return (
      <ScrollView>
      <View >
      <Collapse isExpanded={true}>
        <CollapseHeader>
          <Text style={styles.tab}>{title}</Text>
        </CollapseHeader>
        <CollapseBody >
          {games.map((game)=>{
            return (
              <ListItem key={game.id} style={styles.gametile}>
                <Image
                  source={{ uri:`https:${getGameCover(game)}` }}
                  style={[styles.photo, { width: 150, height: 190 }]}
                />
                <View style = {[styles.rightContainer]}>
                  <Text style = {[styles.textPrimary]}>{game.name}</Text>
                  <Text style={{color: 'blue'}} onPress={() => Linking.openURL(game.url)}>Connect with Others</Text>
                  <Text style = {[styles.textSecondary]}>Rating: {game.aggregated_rating_count}</Text>
                  <Text style = {[styles.textSecondary]}> {getGamePlatform(game)} </Text> 
                  
                </View>
              </ListItem>
            )
          })}
        </CollapseBody>
      </Collapse>
      </View>
      </ScrollView>
    )    
  }
}


export default function LibraryScreen({ navigation }) {

  return (
    <View style={{backgroundColor:""}}>
      <View style={styles.container} >
        <TopBar handleProfilePress={handleProfilePress} handleHomePress={handleHomePress} />
      </View>
      <View>
      </View>
      <GamesList 
        title={"Liked Games"}
        retrieveGames={retrieveLikedGames}
      />
      <GamesList
        title={"Disliked Games"}
        retrieveGames={retrieveDislikedGames}
      />
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
  },
  title: {
    backgroundColor:'#F06795',
    marginTop: Constants.statusBarHeight,
    fontSize: 20,
    color: "azure",
    width: "auto",
  },

  tab: {
    marginTop: Constants.statusBarHeight,
    height:"auto",
    width:"auto",
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F06795',
    fontSize: 25,
    color: "azure",
    textAlign:'center',

  },
  gametile:{
    height:200, 
    width:"auto", 
    backgroundColor: 'aliceblue',
    alignItems:'center',
    borderColor: "darkslateblue"
  },
  photo: {
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textPrimary: {
    marginTop: 60,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light'
  },
  textSecondary:{
    color: 'black',
    fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: 'sans-serif-light'
  },
  rightContainer: {
    marginLeft: 175,
    marginBottom: 100,
    textAlign: 'center'
  }

})