import React from "react";
import  { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import "./SignIn.css"

export default function SignIn(props){
  const [info,setInfo]=useState({email:"",password:""})
  const submitForm = () => {
    axios.post("/sign/in", info)
    .then(props.loggedIn)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(info)}

  return (


    <Form className="signin-form" onSubmit={(event)=> {event.preventDefault();console.log(info);submitForm()}} autoComplete="off">
      <h2>Sign In</h2>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    required={true} 
    value={info.email}
    onChange={(event)=>setInfo({...info,email:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    required={true} 
    value={info.password}
     onChange={(event)=>setInfo({...info,password:event.target.value})}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

)}

