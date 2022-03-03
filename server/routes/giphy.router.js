const express = require('express');
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get('/', (req,res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.search}&limit=50`)
    .then( response => {
        res.send(response.data)
    }).catch( error => {
        console.log('Error on giphy get', error);
        res.sendStatus(500);
    })

});

module.exports = router;