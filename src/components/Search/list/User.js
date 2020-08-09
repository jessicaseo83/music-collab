import React from "react";
import "./User.css"
import Card from 'react-bootstrap/Card'
import { Button, CardGroup, CardColumns } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import axios from 'axios'
import { Redirect } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard"

export default function UserInd ({user}) {

  

  
return (   
  <>
<div className="listings">
<CardColumns className="list">
<Card style={{ width: '18rem' }}>
  <Image className="images" variant="top" src={user.profile_pic} roundedCircle />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>{user.city}</Card.Text>
    <Card.Text>{user.role}</Card.Text>
    <Card.Text>{user.email}</Card.Text>
<Button href={`/dashboard/${user.id}`} variant="primary" >See profile</Button>
  </Card.Body>
</Card>
</CardColumns>
</div>
</>
)}