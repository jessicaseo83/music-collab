import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Profile from './profile/Profile'
import Project from './project/Project'
import MyProjects from './project/MyProjects'


import './Dashboard.css'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Dashboard = (props) => {
  const [project, setProject] = useState([])
  const [profile, setProfile] = useState([])
  // const [myProject, setMyProject] = useState([])
  const [show, setShow] = useState(false)

  useEffect(()=>{
    axios.get('/dashboard')
     .then(res => {
       setProject(res.data)
       setProfile(res.data[0])
     })
    //  axios.post('/:id/dashboard')
    //  .then(res => {
    //     setMyProject(res.data)
    //  })
  },[])

  
  return (
    
    <Container className="main">
      <Row>
        <Col sm={4} className="profile"><Profile profile={profile}/></Col>
        <Col sm={8} className="project">
          <Project project={project}/>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>Edit</Col>
        <Col sm={8}><button variant="primary" type="submit" onClick={(event) => setShow(!show)}>+ Add project</button>
          { show ? <MyProjects/> : null}</Col>

      </Row>
    </Container>
    
  )
}

export default Dashboard;

