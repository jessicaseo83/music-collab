
const express = require('express');
// const { default: Project } = require('../../src/components/Dashboard/Project/Project');
const router = express.Router();


module.exports = ({getProject, addToProjects,getUserById}) => {
  router.get("/", (req, res) => {
    const userId = req.session.userId;
    if(userId){
      let data ={};
      getProject(userId)
      .then(proj => data.projects = proj)
      .then(()=> getUserById(userId))
      .then(user => data.user=user)
      .then(()=> {
        res.status(200)
        console.log(data)
        res.send(data)

      })
    } else {
      
      res.status(403).end()

       
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


