import React from "react";
import './Project.css';
import Row from "react-bootstrap/Row"
import ReactPlayer from "react-player";



export default function Project (props){

  const projects = props.project;
  console.log("These are the projects:", projects)

  return (
    <>
    <Row className="width">
    <div>
      <h3>My Projects</h3>
      {projects.map(project => (
        <div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <ReactPlayer className="player" url={project.url}/>
        </div>
      ))
      }
    </div>
    </Row>
    

</>
  )
}