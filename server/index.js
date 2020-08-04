require('dotenv').config();
const PORT = process.env.PORT || 8080;
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const morgan = require('morgan');

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();
const dbHelpers = require('./helpers/dbHelpers')(db)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

const signRoute = require("./routes/sign");
const usersRoute = require("./routes/users");
app.use("/sign",signRoute(dbHelpers));
app.use("/users",usersRoute(dbHelpers))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT , () => console.log(`Example app listening on port ${PORT}`));