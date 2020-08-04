const express = require('express');
const router = express.Router();

module.exports = () => {
  router.post("/login", (req, res) => {
    console.log(req.body)
  });

  return router;
};