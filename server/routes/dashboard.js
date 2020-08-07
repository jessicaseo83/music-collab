
const express = require('express');
const router = express.Router();


module.exports = ({getProject}) => {
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    if(userId){
      getProject()
      .then(proj => {
        res.status(200)
        res.send(proj)
      })
    } else {
      res.status(403)
    }
  })

return router;
};


