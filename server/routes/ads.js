
const express = require('express');
const router = express.Router();


module.exports = ({getAllAds, getAllCollaborators, addToCollaborators, getUser }) => {
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    if(userId) {
      getAllAds()
    .then(ads => {
      res.status(200)
      res.send(ads)
    }) 
    } else {
      res.status(403)
    }
  })
  router.get("/:id/collaborators", (req,res) => {
    const userId = req.session.userId;
    if(userId) {
      getAllCollaborators(req.params.id)
    .then(collaborators => {
      res.status(200)
      res.send(collaborators)
    })
    } else {
      res.status(403)
    }
  })
  
  router.post("/:id/collaborators", (req,res) => {
    const userId = req.session.userId;
    if (userId) {
    addToCollaborators(req.params.id, userId)
    .then(collab => {
      return getUser(collab.user_id)
    })
    .then(collaborators => {
      console.log("These are my collaborators=>", collaborators.name)
      res.send(collaborators)
    })
  } else {
    res.status(403)
  }
  })
return router;
};

