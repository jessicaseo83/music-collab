import React from "react";
import  { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import Avatar from '@material-ui/core/Avatar';
// // import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// // import "./SignIn.css"

export default function SignIn(){
  const [info,setInfo]=useState({email:"",password:""})

  // function Copyright() {
  //   return (
  //     <Typography variant="body2" color="textSecondary" align="center">
  //       {'Copyright © '}
  //       <Link color="inherit" href="https://material-ui.com/">
  //         Your Website
  //       </Link>{' '}
  //       {new Date().getFullYear()}
  //       {'.'}
  //     </Typography>
  //   );
  // }
  
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     height: '100vh',
  //   },
  //   image: {
  //     backgroundImage: 'url(https://source.unsplash.com/random)',
  //     backgroundRepeat: 'no-repeat',
  //     backgroundColor:
  //       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
  //     backgroundSize: 'cover',
  //     backgroundPosition: 'center',
  //   },
  //   paper: {
  //     margin: theme.spacing(8, 4),
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //   },
  //   avatar: {
  //     margin: theme.spacing(1),
  //     backgroundColor: theme.palette.secondary.main,
  //   },
  //   form: {
  //     width: '100%', // Fix IE 11 issue.
  //     marginTop: theme.spacing(1),
  //   },
  //   submit: {
  //     margin: theme.spacing(3, 0, 2),
  //   },
  // }));

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(info)}

  return (
    // const classes = useStyles();


    // <Grid container component ="main" className={classes.root}>
    //   <CssBaseline/>
    //   <Grid item xs={false} sm={4} md={7} className={classes.image}/>
    //   <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    //     <div className={classes.paper}>
    //       <Avatar className={classes.avatar}>
    //         <LockOutlinedIcon />
    //       </Avatar>

    <Form className="signin-form" onSubmit={onSubmit} autoComplete="off">
      <h2>Sign In</h2>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" 
    required={true} 
    value={info.email}
    onChange={(event)=>setInfo({...info,email:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" 
    required={true} 
    value={info.password}
     onChange={(event)=>setInfo({...info,password:event.target.value})}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

)}

