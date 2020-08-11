import React from "react";
import './Profile.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'



export default function Profile (props){
  const user = props.profile;
  console.log(user)

  return (
    <>
    <Card>
    <Card.Header>Profile</Card.Header>
    <Card.Body>
      <Card.Title>{user.name} </Card.Title>
      <Image className="pic" src={user.profile_pic} roundedCircle />
      <Card.Text>
       {user.role}
      </Card.Text>
      <Card.Text>
        {user.city}
      </Card.Text>
      {props.owner?
      <Button variant="primary">Edit</Button>
      :null
    }
    </Card.Body>
  </Card>
  <br></br>
  <br></br>
  </>
  )
}


