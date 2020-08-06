
const express = require('express');
const router = express.Router();

module.exports = ({getAllAds}) => {
  router.get("/", (req, res) => {
    getAllAds()
    .then(ads => res.send(ads))
  })
return router;
}

;