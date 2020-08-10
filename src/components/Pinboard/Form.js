import React, {useState, useEffect} from "react";
import "./Form.css"
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { Button, CardGroup, CardColumns } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components';

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
  // const clearFilters = function () {
  //   setLocation("")
  //   setRole("")
  //   setGenre("")
  // }


  useEffect(() =>{
    axios.get(`/ads/${ad.id}/collaborators`)
    .then(res => {
      setCollaborators(res.data)
      setFilteredAds(res.data)
    })
  }, [ad])

  // useEffect(() => {
  //   let adsArray = ads;
  //   if (location) {
  //     adsArray = adsArray.filter(ad => ad.location === location) 
  //   }
  //   if (role) {
  //     adsArray = adsArray.filter(ad => ad.role === role)
  //   }
  //   if (genre) {
  //     adsArray = adsArray.filter(ad => ad.genre === genre)
  //   }
  // }, [location, role, genre])

  const collabImg = collaborators.map(c => <Image className="avatars" variant="top" src={c.profile_pic} roundedCircle />)
  console.log("Collab =>",collabImg)
 
return (   
  <>

{/* <select id="role" className="search_filter" onChange={(event)=>setRole(event.target.value)} value ={role}>
      <option value ="" selected  > Select a role</option>
      <option>Musician</option>
      <option>Sound Engineer</option>
      <option>Songwriter</option>
</select>


<select id="location" className="search_filter" onChange={(event)=>setLocation(event.target.value)} value ={location}>
      <option value="" selected  > Select a city</option>
      <option value="Montreal">Montreal</option>
      <option value = "Toronto">Toronto</option>
      <option value ="Vancouver">Vancouver</option>
      <option value ="Ottawa"> Ottawa</option>
</select>
<button type="button" onClick={clearFilters}> Clear All Filters</button> */}





<div className="listings">
<CardColumns className="list">
  <Card>
  <Image className="image" variant="top" src={ad.profile_pic} roundedCircle/>
  <Card.Body>
    <Card.Title>{ad.title}</Card.Title>
    <Card.Text>{ad.role}</Card.Text>
    <Card.Text>{ad.location}</Card.Text>
    <Card.Text>{ad.description}</Card.Text>
    <Card.Text>Interested in working in this genre: {ad.genre}</Card.Text>
    <Card.Text>Positions available: {ad.positions_available}</Card.Text>
    <div className="avatars">{collabImg}</div>
   <br></br>
  
  <Button type="submit" onClick={onClick} variant="primary" disabled={collaborators.length >= ad.positions_available}>Join project</Button>

  </Card.Body>
</Card>
</CardColumns>
</div>
</>
)}