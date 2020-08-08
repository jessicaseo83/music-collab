
const express = require('express');
const router = express.Router();


module.exports = ({getProject, addToProjects}) => {
  router.get("/dashboard", (req, res) => {
    const userId = req.session.userId;
    if(userId){
      getProject(userId)
      .then(proj => {
        res.status(200)
        res.send(proj)
    
      })
    }
  })


  

  router.post("/", (req,res) => {
    addToProjects(req.params)
    .then(proj => {
      return getProject(proj.user_id)
    })
    .then(projects => {
      console.log("These are my collaborators=>", projects)
      res.send(projects)
    })
  })
return router;
};


