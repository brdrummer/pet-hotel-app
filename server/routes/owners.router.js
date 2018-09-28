// CONSTANTS/VARIABLES
const express = require('express');
const pool = require('../modules/pool');
let router = express.Router();

console.log('Router Working');

// OWNERS GET
router.get('/', (req, res) => {

    pool.query(`SELECT "owners".*, COUNT("pets") as "number_of_pets" 
        FROM "owners"
        LEFT JOIN "pets"
        ON "owners"."id" = "pets"."owner_id"
        GROUP BY "owners"."id";`)
        .then((results) => {
            console.log(results.rows);
            res.send(results.rows);
        }).catch((error) => {
            console.log('error with SQL select for owners', error);
            res.sendStatus(500);
        });
}); // END OWNERS GET

router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "owners" WHERE "id" = $1;`,
        [req.query.id])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with SQL insert for listings', error);
            res.sendStatus(500);
        });
});

// POST
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "owners" ("name")
                VALUES ($1);`, [req.body.name])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with SQL insert for listingPOST', error);
            res.sendStatus(500);
        });
}); //End POST 




module.exports = router;