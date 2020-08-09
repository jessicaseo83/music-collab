import React from "react";
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { propTypes } from "react-bootstrap/esm/Image";



export default function MyProjects(props){
  const [info, setInfo] = useState({title:"", description:"",url:"", pic:""})
  const submitForm = () => {
    axios.post("/dashboard", info)
    .then(res => props.addProject(res.data))
  }
  
  return (
    
    <Form className="my-projects-form" onSubmit={(event)=> {event.preventDefault();console.log(info); submitForm()}} autoComplete="off">
      <h2>My Projects Portfolio</h2>

    <Form.Group controlId="title">
      <Form.Label>Project Name</Form.Label>
      <Form.Control type="text" placeholder="Enter a title" 
      required={true} 
      value={info.title}
      onChange={(event)=>setInfo({...info,title:event.target.value})}/>
    </Form.Group>

    <Form.Group controlId="description">
      <Form.Label>Description</Form.Label>
      <Form.Control type="description" placeholder="Add a description" 
      required={true} 
      value={info.description}
      autoComplete="none"
      onChange={(event)=>setInfo({...info,description:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="url">
    <Form.Label>Link to project</Form.Label>
    <Form.Control type="url" placeholder="Link" 
    required={true} 
    value={info.url}
     onChange={(event)=>setInfo({...info,url:event.target.value})}/>
  </Form.Group>
  
  <Form.Group controlId="url">
    <Form.Label>Img</Form.Label>
    <Form.Control type="pic" placeholder="Link" 
    required={true} 
    value={info.pic}
     onChange={(event)=>setInfo({...info,pic:event.target.value})}/>
  </Form.Group>

 
  <Button variant="primary" type="submit">+</Button>
</Form>
  )


}