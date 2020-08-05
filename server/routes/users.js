const express = require('express');
const router = express.Router();
const {encryptPassword} = require('../helpers/passwordHelpers')
const {getGeoLocation} = require('../helpers/geoLocation')


module.exports = ({getAllUsers,saveUser}) => {
  router.get("/", (req, res) => {
    getAllUsers()
    .then(users => res.send(users))
  });

  router.post("/",(req,res)=>{
    const info = req.body;
    info.password = encryptPassword(info.password);
    getGeoLocation(info["postalCode"])
    .then(location => saveUser(info,location))
    .then(user => res.send(user))
  })
  return router;
};