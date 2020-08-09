
import React, { Component, useState} from 'react';
import Cookies from "js-cookie"
import axios from "axios"
import Chat from './components/Chatbox/Chat/Chat';
import Join from './components/Chatbox/Join/Join';
import Dashboard from './components/Dashboard/Dashboard';
import Pinboard from './components/Pinboard/Pinboard';
import Search from './components/Search/Search';
import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'
import Project from './components/Dashboard/Project/Project.js'
import MyProjects from './components/Dashboard/Project/Project.js'

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"


import { BrowserRouter as Router, Route, Redirect, BrowserRouter } from "react-router-dom";

class App extends Component {
  state= {
    sideDrawerOpen: false,
    loggedIn:Cookies.get('user')

    }
  
  drawerToggleClickHandler= () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler =() => {
    this.setState({sideDrawerOpen: false});
  };

  loggedIn =()=>{
      Cookies.set('user',true);
      this.setState({loggedIn: true})
  };
    
    
  

  loggedOut =()=>{
    axios.post('/sign/out')
      .then(()=>{
        Cookies.remove('user')
        this.setState({loggedIn: false})
      })

    
    
  };

  render() {

  let sideDrawer;
  let backdrop;

  if(this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer/>;
    backdrop = <Backdrop click={this.backdropClickHandler}/>;
  }
  
  return (
    <>
    <Router>

      <Route path="/chatbox/join">
       {this.state.loggedIn?<Join/>:<Redirect to ="/signin" />} 
      </Route>

      <Route path="/chat">
        {this.state.loggedIn? <Chat/>:<Redirect to ="/signin" />} 
       
      </Route> 


      <Route path="/dashboard">
        {this.state.loggedIn? <Dashboard/>:<Redirect to ="/signin" />}
        
      </Route> 

      <Route path="/pinboard">
        {this.state.loggedIn? <Pinboard/>:<Redirect to ="/signin" />}
        
      </Route>

      <Route path="/search">
        {this.state.loggedIn?  <Search/>:<Redirect to ="/signin" />}
       
      </Route>

      <Route path="/signin">
        {this.state.loggedIn?  <Search/>:<SignIn loggedIn={this.loggedIn} />}
        
      </Route>

      <Route path="/signup">
        {this.state.loggedIn?  <Search/>:<SignUp loggedIn={this.loggedIn} />}
        
      </Route>

    </Router>
    <div style={{height: "100%"}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} loggedIn ={this.state.loggedIn} loggedOut={this.loggedOut}/>
      {sideDrawer}
      {backdrop}
    </div>
    </>
  );
}
}


export default App;