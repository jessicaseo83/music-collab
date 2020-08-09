const express = require('express');
const router = express.Router();
const {encryptPassword} = require('../helpers/passwordHelpers')
const {getGeoLocation} = require('../helpers/geoLocation')


module.exports = ({getAllUsers,saveUser}) => {
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    if(userId){  
      getAllUsers()
      .then(users => {
        res.status(200)
        res.send(users)
      })
    } else {
      res.status(403).end()
    }
  });

  router.post("/",(req,res)=>{
    const info = req.body;
    info.password = encryptPassword(info.password);
    getGeoLocation(info["postalCode"])
    .then(location => saveUser(info,location))
    .then(user => {
      console.log(user)
      req.session["userId"] = user.id;
      res.status(200)
      res.send({ name: user.name, pic: user.profile_pic})
    })
    .catch(err => {
      console.log(err)
      res.status(500).end()
    })
  })
return router;
};