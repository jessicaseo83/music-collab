import React from "react";
import './Project.css';
import axios from 'axios';

export default function Project (props){
  const projects = props.project;
  console.log("These are the projects:", projects)

  return (
    <div>
      <h3>My Projects</h3>
      {projects.map(project => (
        <div>
          <img className="project_pic" src={project.pic}/>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a className="url" href={project.url}>Check here!</a>
        </div>
      ))
      }
    </div>
  )
}