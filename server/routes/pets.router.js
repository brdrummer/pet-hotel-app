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
            console.log('error with SQL select for pets', error);
            res.sendStatus(500);
        });
});



router.post('/', (req, res) => {
    pool.query(`INSERT INTO "pets" ("pet", "breed", "color")
                VALUES ($1, $2, $3);`, [req.body.pet, req.body.breed, req.body.color])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with SQL insert for petsPOST', error);
            res.sendStatus(500);
        });
});


router.delete('/', (req, res) => {
    pool.query(`DELETE FROM "pets" WHERE "id" = $1;`,
        [req.query.id])

        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with SQL delete for pets', error);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    pool.query(`UPDATE "pets" SET "checked_in" = 'true' WHERE "id" = $1`, [req.query.id])
        .then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error with SQL delete for pets', error);
            res.sendStatus(500);
        });
});

module.exports = router;