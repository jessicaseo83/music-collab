import React, {useState, useEffect} from "react";
import "./Form.css"
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button, CardGroup, CardColumns } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel'


const HoverText = styled.p`
	color: #000;
	:hover {
		background-color: #ed1212;
		cursor: pointer;
	}
`


export default function AdInd ({ad}) {
  const [collaborators, setCollaborators] = useState([]);
  // const [ads,setAds] = useState([]);
  const [count, setCount] = useState(ad.positions_available);
  // const [role,setRole] = useState("");
  // const [location,setLocation] = useState("");
  // const [genre,setGenre] = useState("");
  const [filteredAds,setFilteredAds] = useState([]);

  //<---------------HELPER FUNCTIONS---------------->
 

  const onClick = () => {
    axios.post(`/ads/${ad.id}/collaborators`)
      .then(res => {
        setCollaborators(collabs => [...collabs, res.data])
        console.log("What are the setCollaborators=>", res.data)
      })
      .catch((err) => {
        console.log("You got this right, but there's no user authentification yet.")
      })
    }

  
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
}


  useEffect(() =>{
    axios.get(`/ads/${ad.id}/collaborators`)
    .then(res => {
      setCollaborators(res.data)
      setFilteredAds(res.data)
    })
  }, [ad])



  const collabImg = collaborators.map(c => <Image className="avatars" variant="top" src={c.profile_pic} roundedCircle />)
  console.log("Collab =>",collabImg)
 
return (   
<>
  <div className="listings">
<CardGroup>
<CardColumns className="list">
  <Card className="pin">
  <Card.Header as="h5">{ad.title}</Card.Header>
  <Image className="image" variant="top" src={ad.profile_pic} roundedCircle/>
  <Card.Body>
    <Card.Title>{ad.title}</Card.Title>
    <Card.Text><b>What I am: </b>{ad.role}</Card.Text>
    <Card.Text><b>Where I'm located: </b>{ad.location}</Card.Text>
    <Card.Text><b>Looking for: </b>{ad.description}</Card.Text>
    <Card.Text><b>Working in this genre: </b> {ad.genre}</Card.Text>
    <Card.Text>Positions available: {ad.positions_available}</Card.Text>
    <div className="avatars">{collabImg}</div>
   <br></br>
  
  <Button type="submit" onClick={onClick} variant="primary" disabled={collaborators.length >= ad.positions_available}>Join project</Button>

  </Card.Body>
</Card>
</CardColumns>
</CardGroup>
</div>
</>


)}

