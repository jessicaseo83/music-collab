import React from "react";
import './Project.css';

export default function Project (props){
  const projects = props.project;
  console.log(projects)

  return (
    <div>
      <h3>My Project</h3>
      {projects.map(project => (
        <p>
          <img className="project_pic" src={project.pic}/>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <a href={project.url}>Check here!</a>
        </p>
      ))
      }
    </div>
  )
}