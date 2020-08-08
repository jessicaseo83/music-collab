import React from "react";
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 100,
  },
});

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 25,
    label: '25',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 75,
    label: '75',
  },
  {
    value: 100,
    label: '100',
  }
];

export default function MyProjects(){
  const [info,setInfo]=useState({title:"", description:"",url:"", image:""})
  const classes = useStyles();
  return (
    
    <Form className="my-projects-form"onSubmit={(event)=> {event.preventDefault();console.log(info)}} autoComplete="off">
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
  
  <Form.Group>
    <Form.File id="file" label="Upload a profile picture" />
  </Form.Group>

 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )


}