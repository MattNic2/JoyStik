var express = require("express");
var router = express.Router();
const axios = require('axios');




router.get("/", function(req, res, next) {

    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID' : 'lev2pufopejltc7scj9906kmijhh86',
            'Authorization' : 'Bearer gee85z9hsa1y5rsy7612r9lu9u0nm7',
        },
        data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
      })
        .then(response => {
            //console.log(response.data);
            const testing = response.data;
            res.json(testing);
        })
        .catch(err => {
            console.error(err);
        });
    
});



module.exports = router;