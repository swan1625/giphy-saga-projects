const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "favorites"."id"  `)
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  let newFavorite = req.body.url;
  console.log('In favorite.router.js and the req.body is:', newFavorite);
  const sqlQuery = `INSERT INTO "favorites"
  (url)
  VALUES ($1);`;
  pool.query(sqlQuery, [newFavorite])
  .then((response) => {
    console.log('Successful Post in favorite.router.js!!!!', response);
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
