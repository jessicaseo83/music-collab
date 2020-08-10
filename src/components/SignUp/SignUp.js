import React from "react";
import axios from 'axios';
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./SignUp.css"

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

export default function SignUp(props){
  const [info,setInfo]=useState({name:"",birthday:"",email:"",password:"",city:"",postalCode:"",role:""})
  const classes = useStyles();
  const submitForm = () => {
    axios.post("/users", info)
    .then(props.loggedIn)
  }
  
  return (
    
    <Form className="signup-form"onSubmit={(event)=> {event.preventDefault();console.log(info); submitForm()}} autoComplete="off">
      <h2>Sign Up</h2>

    <Form.Group controlId="user_name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" 
      required={true} 
      value={info.name}
      onChange={(event)=>setInfo({...info,name:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="user_email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    required={true} 
    value={info.email}
    autoComplete="none"
    onChange={(event)=>setInfo({...info,email:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="user_password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    required={true} 
    value={info.password}
     onChange={(event)=>setInfo({...info,password:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="user_birth">
      <Form.Label>Date of birth</Form.Label>
      <Form.Control type="date" placeholder="Birthday" 
      required={true} 
      value={info.birthday}
      onChange={(event)=>setInfo({...info,birthday:event.target.value})}/>
  </Form.Group>


  <Form.Group controlId="user_role">
      <Form.Label>What's your role in the music industry?</Form.Label>
      <Form.Control as="select" onChange={(event)=>setInfo({...info,role:event.target.value})} required={true}>
      <option>Select a role</option>
      <option>Sound Engineer</option>
      <option>Producer</option>
      <option>Musician</option>
      <option>Songwriter</option>
      <option>Composition</option>
      </Form.Control>
  </Form.Group>

  <Form.Group>
    <Form.File id="file" label="Upload a profile picture" />
  </Form.Group>

  <Form.Group controlId="user_city">
    <Form.Label>City</Form.Label>
    <Form.Control as="select" onChange={(event)=>setInfo({...info,city:event.target.value})} required={true}>
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Montreal</option>
      <option>Vancouver</option>
      <option>Ottawa</option>
      </Form.Control>
  </Form.Group>

  <Form.Group controlId="user_postal_code">
    <Form.Label>Postal Code</Form.Label>
    <Form.Control type="text" placeholder="A1A A1A" 
    pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
    value={info.postalCode}
    required={true}
    autoComplete="none"
    onChange={(event)=>setInfo({...info,postalCode:event.target.value})}
    />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  )


}