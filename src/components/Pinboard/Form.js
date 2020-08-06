import React from "react";
import "./Form.css"
import Card from 'react-bootstrap/Card'
import { Button, CardGroup, CardColumns } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function AdInd ({ad}) {
return (   
  <>
<div className="listings">
<CardColumns className="list">
<Card style={{ width: '18rem' }}>
  <Image className="images" variant="top" src={ad.profile_pic} roundedCircle />
  <Card.Body>
    <Card.Title>{ad.title}</Card.Title>
    <Card.Text>{ad.role}</Card.Text>
    <Card.Text>{ad.location}</Card.Text>
<Button href="/dashboard" variant="primary">See profile</Button>
  </Card.Body>
</Card>
</CardColumns>
</div>
</>
)}