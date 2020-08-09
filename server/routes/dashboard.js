
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
        res.send(data)

      })
    } else {
      
      res.status(403).end()

       
    }
  })

  router.get("/:id", (req, res) => {
    const userId = req.session.userId;
    if(userId){
      let data ={};

      console.log(req.params)
       getProject(req.params.id)
       .then(proj => data.projects = proj)
       .then(()=> getUserById(req.params.id))
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
    const userId = req.session.userId
    if (userId){
      const info = req.body;
      addToProjects(info,userId)
      .then(proj => res.status(200).send(proj))


    } else {
      res.status(403).end()
    }
    
  })
return router;
};


