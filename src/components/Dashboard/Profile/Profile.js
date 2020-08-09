import React from "react";
import './Profile.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Profile (props){
  const user = props.profile;
  console.log(user)

  return (
    <Card bg="Info">
    <Card.Header>Profile</Card.Header>
    <Card.Body>
      <Card.Title>{user.name} </Card.Title>
      <img className="pic" src={user.profile_pic} />
      <Card.Text>
       {user.role}
      </Card.Text>
      <Card.Text>
        {user.city}
      </Card.Text>
      <Button variant="primary">Edit</Button>
    </Card.Body>
  </Card>
  )
}

