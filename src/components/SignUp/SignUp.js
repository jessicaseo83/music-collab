import React from "react";
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./SignUp.css"


export default function SignIn(){
  const [info,setInfo]=useState({name:"",birthday:"",email:"",password:"",city:"",postalCode:"",role:""})

  return (

    <Form className="signup-form"onSubmit={(event)=> {event.preventDefault();console.log(info)}} autoComplete="off">
      <h2>Sign Up</h2>

    <Form.Group controlId="user_name">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" 
      required={true} 
      value={info.name}
      onChange={(event)=>setInfo({...info,name:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="user_birth">
      <Form.Label>Birthday</Form.Label>
      <Form.Control type="date" placeholder="Birthday" 
      required={true} 
      value={info.birthday}
      onChange={(event)=>setInfo({...info,birthday:event.target.value})}/>
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

  <Form.Group controlId="user_role">
      <Form.Label>Role</Form.Label>
      <Form.Control type="text" placeholder="Enter role" 
      required={true} 
      value={info.role}
      onChange={(event)=>setInfo({...info,role:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="user_city">
    <Form.Label>City</Form.Label>
    <Form.Control as="select" onChange={(event)=>setInfo({...info,city:event.target.value})} required={true}>
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