
const express = require('express');
const router = express.Router();


module.exports = ({getAllAds, getAllCollaborators}) => {
  router.get("/", (req, res) => {
    getAllAds()
    .then(ads => res.send(ads))
  })
  router.get("/:id/collaborators", (req,res) => {
    getAllCollaborators(req.params.id)
    .then(collaborators => {
      console.log("String",collaborators)
      res.send(collaborators)})
  })
  router.post("/collaborators", (req,res) => {
    addToCollaborators(req.params.id)
    .then(collaborators => {
      console.log("These are my collaborators=>", collaborators.name)
      res.send(collaborators)
    })
  })
return router;
}

;