const express = require('express');
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get('/:id:name', (req,res) => {
    console.log('req.params is', req.params);
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.id}&${req.params.name}&limit=50`)
    .then( response => {
        console.log('response is', response);
        res.send(response.data)
    }).catch( error => {
        console.log('Error on giphy get', error);
        res.sendStatus(500);
    })

});

module.exports = router;