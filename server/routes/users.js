const express = require('express');
const router = express.Router();


module.exports = ({getAllUsers}) => {
  router.get("/", (req, res) => {
    getAllUsers()
    .then(users => res.send(users))
  });
  return router;
};