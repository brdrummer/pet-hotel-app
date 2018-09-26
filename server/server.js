const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;
const petsRouter = require('./routes/pets.router');

app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/pets', petsRouter);

console.log( 'PG is working');

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`)
});