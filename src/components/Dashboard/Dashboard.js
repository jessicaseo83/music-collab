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




import Form from 'react-bootstrap/Form';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100px',
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Dashboard = (props) => {
  const [project, setProject] = useState(props.projects || [])
  const [profile, setProfile] = useState(props.user || [])
  // const [myProject, setMyProject] = useState([])
  const [show, setShow] = useState(false)
  const id = useParams()["id"];
  const url = id? `/dashboard/${id}`:"/dashboard";
 
  const classes = useStyles();
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
    <>
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
  
    </>
  )
}

export default Dashboard;

