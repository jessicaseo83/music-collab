import React from "react";
// import './project.css';

export default function Project (props){
  const projects = props.project;
  console.log(projects)

  return (
    <div>
      <h3></h3>
      {projects.map(project => (
        <p>link
        <a href={project.url}/>
        </p>
      ))
      }
    </div>
  )
}