
const express = require('express');
const router = express.Router();


module.exports = ({getProject}) => {
  router.get("/", (req, res) => {
    getProject()
    .then(proj => res.send(proj))
  })

return router;
};