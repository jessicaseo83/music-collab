const express = require('express');
const router = express.Router();
const {validatePassword} = require('../helpers/passwordHelpers')

module.exports = ({getUserByEmail}) => {
  router.post("/in", (req, res) => {
    const {email,password}=req.body;
    getUserByEmail(email)
    .then(user => validatePassword(user,password))
    .then(user => {
      req.session["userId"] = user.id;
      res.status(200)
      res.send({ name: user.name, pic: user.profile_pic})
    })
    .catch(err => res.status(err.status).send(err.message))
  });
  return router;
};