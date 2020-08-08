
const express = require('express');
// const { default: Project } = require('../../src/components/Dashboard/Project/Project');
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
    }
  })
  
  // router.post("/:id/dashboard", (req,res) => {
  //   addToProjects(req.params.id,1)
  //   .then(proj => {
  //     return getUser(proj.user_id)
  //   })
  //   .then(projects => {
  //     console.log("These are my collaborators=>", projects)
  //     res.send(projects)
  //   })
  // })
return router;
};


