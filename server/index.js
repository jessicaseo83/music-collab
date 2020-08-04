require('dotenv').config();
const PORT = process.env.PORT || 8000;
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const morgan = require('morgan');

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

const authenticationRoutes = require("./routes/authentication");
app.use("/",authenticationRoutes())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT , () => console.log(`Example app listening on port ${PORT}`));