import React from "react";
import axios from 'axios';
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import "./SignUp.css"

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
import img from "./photo.png";
import band from "./band.png";
import soundpro from "./soundpro.png";
import studio from "./INFO.png";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Music Lab
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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

function valuetext(value) {
  return `${value}`;
}

const marks = [
  {
    value: 25,
    label: '25',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 75,
    label: '75',
  },
  {
    value: 100,
    label: '100',
  }
];

export default function SignUp(props){
  const [info,setInfo]=useState({name:"",birthday:"",email:"",password:"",city:"", profile_pic:"",postalCode:"",role:""})
  const classes = useStyles();

  const submitForm = () => {
    axios.post("/users", info)
    .then(props.loggedIn)
  }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={7} md={4} className="Welcome-index">
        <Row>
        <img className="image" src={img}/>
        </Row>
        <Row>
      <span>
          <h6 className="slogan"><i>A site made by artists for artists.</i></h6></span>
          <img className="studio" src={studio}/>
          <div className="steps">
            <h4 className="1"><i>Create a profile in 3 <b>easy</b> steps:</i></h4>
            <h5>1. Give us some details on your industry experience.</h5>
            <h5>3. Find industry professionals in your area.</h5>
            <h5>4. Go to the chatbox to meet industry professionals near you.</h5>
          </div>
        </Row>
    
      
      
      </Grid>
      <Grid item xs={12} sm={5} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form>
                <Form className="signup-form"onSubmit={(event)=> {event.preventDefault();console.log(info); submitForm()}} autoComplete="off">
               <h2>Sign Up</h2>

                <Form.Group controlId="user_name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" 
                  required={true} 
                  value={info.name}
                  onChange={(event)=>setInfo({...info,name:event.target.value})}/>
              </Form.Group>

              <Form.Group controlId="user_email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                required={true} 
                value={info.email}
                autoComplete="none"
                onChange={(event)=>setInfo({...info,email:event.target.value})}/>
              </Form.Group>

              <Form.Group controlId="user_password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                required={true} 
                value={info.password}
                onChange={(event)=>setInfo({...info,password:event.target.value})}/>
              </Form.Group>

              <Form.Group controlId="user_birth">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control type="date" placeholder="Birthday" 
                  required={true} 
                  value={info.birthday}
                  onChange={(event)=>setInfo({...info,birthday:event.target.value})}/>
              </Form.Group>


              <Form.Group controlId="user_role">
                  <Form.Label>What's your role in the music industry?</Form.Label>
                  <Form.Control as="select" onChange={(event)=>setInfo({...info,role:event.target.value})} required={true}>
                  <option>Sound Engineer</option>
                  <option>Producer</option>
                  <option>Musician</option>
                  <option>Songwriter</option>
                  <option>Composition</option>
                  </Form.Control>
              </Form.Group>

              <Form.Group>
                <p>What is your experience with these tools</p>
                  <Typography id="vertical-slider" gutterBottom>Cubase</Typography>
                  <div className={classes.root}>
                    <Slider
                      valueLabelDisplay="on"
                      orientation="vertical"
                      getAriaValueText={valuetext}
                      defaultValue={25}
                      aria-labelledby="vertical-slider"
                    />
      </div>
      <Typography id="vertical-slider" gutterBottom>Logic</Typography>
      <div className={classes.root}>
        <Slider
          valueLabelDisplay="on"
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={25}
          aria-labelledby="vertical-slider"
        />
      </div>
  </Form.Group>

  <Form.Group controlId="url">
    <Form.Label>Profile picture</Form.Label>
    <Form.Control type="profile_pic" placeholder="Link" 
    required={true} 
    value={info.profile_pic}
     onChange={(event)=>setInfo({...info,profile_pic:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="user_city">
    <Form.Label>City</Form.Label>
    <Form.Control as="select" onChange={(event)=>setInfo({...info,city:event.target.value})} required={true}>
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Montreal</option>
      <option>Vancouver</option>
      <option>Ottawa</option>
      </Form.Control>
  </Form.Group>

  <Form.Group controlId="user_postal_code">
    <Form.Label>Postal Code</Form.Label>
    <Form.Control type="text" placeholder="A1A A1A" 
    pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"
    value={info.postalCode}
    required={true}
    autoComplete="none"
    onChange={(event)=>setInfo({...info,postalCode:event.target.value})}
    />
  </Form.Group>


  <Button variant="primary" type="submit" className="submitButton">
    Submit
  </Button>
</Form>
</form>
            <Grid container>
              <Grid item xs>
                <br/>
                <Link href="/signin" variant="body2" className="password-forgot">
                  Already a member? Sign in!
                </Link>
              </Grid>
            
            </Grid>
            <Box mt={5}>
              <Copyright/>
            </Box>
        </div>
      </Grid>
    </Grid>
  );

}




