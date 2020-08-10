import React from "react";
import axios from 'axios';
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
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
import Icon from '@material-ui/core/Icon'
import img from "./profile.png"



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: '{img}',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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

export default function SignIn(){
  const [info,setInfo]=useState({name:"",birthday:"",email:"",password:"",city:"", profile_pic:"",postalCode:"",role:""})
  const classes = useStyles();
  const submitForm = () => {
    axios.post("/users", info).then(console.log("test"))
  }
  
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={7} md={4} className={classes.image} />
      <Grid item xs={12} sm={5} md={8} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
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


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>
  );

}




