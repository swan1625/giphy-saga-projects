const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let queryText = 'SELECT favorites.id, favorites.url, favorites.category_id, category.name FROM favorites JOIN category ON favorites.category_id = category.id;';
  pool.query(queryText)
  .then((result) => {
    // console.log('Success!');
    res.send(result.rows);
  }).catch((err) => {
    console.log('Error in get on favorite.router.js!!', err);
    res.sendStatus(500);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  let newFav = req.body;
  console.log('In favorite.router.js and the req.body is:', newFav);
  let sqlQuery = `INSERT INTO "favorites" ("url")
                    VALUES ($1);`;
  // pool.query(queryText, [newFavorite.url, newFavorite.category_id])
  pool.query(sqlQuery, [newFav.url])

  .then((response) => {
    console.log('Successful Post!!', response);
    
    res.sendStatus(200);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  })
  
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
