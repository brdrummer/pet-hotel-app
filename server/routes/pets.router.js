// CONSTANTS/VARIABLES
const express = require('express');
const pool = require('../modules/pool');
let router = express.Router();


router.get('/', (req, res) => {

    pool.query('SELECT * FROM "pets"')
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for owners', error);
            res.sendStatus(500);
        });
}); // END OWNERS GET



module.exports = router;