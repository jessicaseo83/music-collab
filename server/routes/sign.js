const express = require('express');
const router = express.Router();
const {validatePassword} = require('../helpers/passwordHelpers')

module.exports = ({getUserByEmail}) => {
  router.post("/in", (req, res) => {
    const {email,password}=req.body;
    getUserByEmail(email)
    .then(user => validatePassword(user,password))
    .then(user => res.send(user))
    .catch(err => res.status(err.status).send(err.message))
  });
  return router;
};