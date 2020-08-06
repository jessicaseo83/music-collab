import React, {useState, useEffect} from "react";
import "./Form.css"
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button, CardGroup, CardColumns } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'



export default function AdInd ({ad}) {
  const [collaborators, setCollaborators] = useState([]);
  const [count, setCount] = useState(ad.positions_available)

  const onClick = () => {
    if (count > 0){
      setCount(count - 1)
    }
    //disable button
    console.log(count)
  }

  useEffect(() =>{
    axios.get(`/ads/${ad.id}/collaborators`)
    .then(res => setCollaborators(res.data))
  }, [ad])

  const collabImg = collaborators.map(c => <Image className="images" variant="top" src={c.profile_pic} roundedCircle />)

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
    <Card.Text>{ad.description}</Card.Text>
    <Card.Text>{ad.positions_available}</Card.Text>
    {collabImg}
<Button onClick={onClick} variant="primary" disabled={count===0}>Join</Button>
  </Card.Body>
</Card>
</CardColumns>
</div>
</>
)}