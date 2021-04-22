import AsyncStorage from '@react-native-async-storage/async-storage';

const LIKED_GAMES_KEY = "liked-games";
const DISLIKED_GAMES_KEY = "disliked-games";

/*

 {
    "checksum": "fb9fae9b-d717-d1d1-a3ee-ef6191af168d",
    "game": 46426,
    "height": 2156,
    "id": 28001,
    "image_id": "arzwj3bju1aoakgufnku",
    "url": "//images.igdb.com/igdb/image/upload/t_thumb/arzwj3bju1aoakgufnku.jpg",
    "width": 1539,
  }

*/



async function retrieveJSONObjects(){
    var [
        likedGamesText,
        dislikedGameText
    ] = await Promise.all([
         AsyncStorage.clear(),
         AsyncStorage.getItem(LIKED_GAMES_KEY),
         AsyncStorage.getItem(DISLIKED_GAMES_KEY)
    ])

    return {
        liked: likedGamesText == null ? {} : JSON.parse(likedGamesText),
        disliked: dislikedGameText == null ? {} : JSON.parse(dislikedGameText)
    }
}

async function resaveJSONObjects({ liked, disliked }){
    const likedText = JSON.stringify(liked);
    const dislikedText = JSON.stringify(disliked);
    await Promise.all([
        AsyncStorage.setItem(LIKED_GAMES_KEY, likedText),
        AsyncStorage.setItem(DISLIKED_GAMES_KEY, dislikedText)
   ])
   return true
}

async function addToLikedGames(game){
    const gameID = game.id || game.cover || game.genres || game.platforms || game.websites
    const {
        liked, disliked
    } = await retrieveJSONObjects()
    if(gameID in disliked){
        delete disliked[gameID];
    }
    if(!(gameID in liked)){
        liked[gameID] = game;
    }
    var ret = await resaveJSONObjects({
        liked, disliked
    });
    return true;
}

async function addToDislikedGames(game){
    const gameID = game.id || game.cover || game.genres || game.platforms || game.websites
    const {
        liked, disliked
    } = await retrieveJSONObjects()
    if(gameID in liked){
        delete liked[gameID];
    }
    if(!(gameID in disliked)){
        disliked[gameID] = game;
    }
    var ret = await resaveJSONObjects({
        liked, disliked
    });

    return true;
}

async function retrieveLikedGames(){
    const text = await AsyncStorage.getItem(LIKED_GAMES_KEY);
    if(text === null){
        return []
    }
    const json = JSON.parse(text);
    return Object.values(json);
}

async function retrieveDislikedGames(){
    const text = await AsyncStorage.getItem(DISLIKED_GAMES_KEY);
    if(text === null){
        return []
    }
    const json = JSON.parse(text);
    return Object.values(json);
}

async function hasGameAlreadyBeenHandled(game){
    const {
        liked, disliked
    } = await retrieveJSONObjects()
    if(game.checksum in liked){
        return true
    }
    if(game.checksum in disliked){
        return true
    }
    return false
}

export {
    hasGameAlreadyBeenHandled,
    addToLikedGames,
    addToDislikedGames,
    retrieveLikedGames,
    retrieveDislikedGames
}

