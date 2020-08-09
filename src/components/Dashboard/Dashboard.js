import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from './Profile/Profile'
import Project from './Project/Project'
import MyProjects from './Project/MyProjects'
import {useParams} from 'react-router-dom'

import './Dashboard.css'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const Dashboard = (props) => {
  const [project, setProject] = useState(props.projects || [])
  const [profile, setProfile] = useState(props.user || [])
  // const [myProject, setMyProject] = useState([])
  const [show, setShow] = useState(false)
  const id = useParams()["id"];
  const url = id? `/dashboard/${id}`:"/dashboard";
 
  
  useEffect(()=>{
    
    axios.get(url)
     .then(res => {
       setProject(res.data.projects)
       setProfile(res.data.user)
     })
  },[])

  const addProject = function(project) {
      setProject((prev) => [...prev,project])
  }

  
  return (
    
    <Container className="main">
      <Row>
        <Col l={4} className="profile"><Profile profile={profile}/></Col>
        <Col l={8} className="project">
          <Project project={project}/>
        </Col>
      </Row>
      <Row>
        <Col l={4}></Col>
        <Col l={8}><Button variant="primary" type="submit" onClick={(event) => setShow(!show)}>+ Add project</Button>
        </Col>
      </Row>
     <br/>
     <br/>
      <Row>
        <Col>
      { show ? <MyProjects addProject={addProject}/> : null}
      </Col>
      </Row>
    </Container>
    
  )
}

export default Dashboard;

