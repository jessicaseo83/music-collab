import React from "react";
import './Project.css';
import Row from "react-bootstrap/Row"
import ReactPlayer from "react-player";
import FlipPage from "react-flip-page";


export default function Project (props){
  const projects = props.project;
  const pages = [
  { title: "First chapter", content: "Content content content" },
  { title: "Second chapter", content: "Content content content" },
  { title: "Third chapter", content: "Content content content" }
];


  console.log("These are the projects:", projects)

  return (
    <>
    <div className="width">
    <div className="project-title">
      <h2>My Projects</h2>
      {/* {projects.map(project => (
        <div>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          <ReactPlayer className="player" url={project.url}/>
        </div>
      ))
      } */}
    </div>
    <div className="app">
      <FlipPage
        className="book"
        showSwipeHint
        uncutPages
        orientation="horizontal"
        width="800"
        pageBackground="#fffdf8"
        animationDuration="400"
      >
        {projects.map(project => (
          <article style={{ width: "300px ", padding: "10px 20px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ReactPlayer className="player" url={project.url}/>
          </article>
        ))}
      </FlipPage>
    </div>
    </div>
    

</>
  )
}