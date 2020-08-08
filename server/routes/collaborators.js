
const express = require('express');
const router = express.Router();

module.exports = ({getAllCollaborators}) => {
  router.get("/", (req, res) => {
    getAllCollaborators()
    .then(collaborators => res.send(collaborators))
  })


return router;
}

;