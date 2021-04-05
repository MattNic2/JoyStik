var express = require("express");
var router = express.Router();
const axios = require('axios');




router.get("/", function(req, res, next) {

    axios({
        url: "https://api.igdb.com/v4/covers",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID' : 'lev2pufopejltc7scj9906kmijhh86',
            'Authorization' : 'Bearer gee85z9hsa1y5rsy7612r9lu9u0nm7',
        },
        data: "fields alpha_channel,animated,checksum,game,height,image_id,url,width;"
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