import React from 'react';
import logo from '../logo.png';
import Navbar from 'react-bootstrap/Navbar';
import "./Toolbar.css"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";



const Toolbar = props => (
  <>
  <header className="toolbar"> 
    <Navbar className="nav">
      <div className="toolbar-toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="App-logo"><a href="/"><img src={logo} height="50%" width="50%"/></a></div>
  
      <div className="spacer"/>
        <div className="nav-pages">
          <ul>
            <li><a href="/search">Collaborate</a></li>
            <li><a href="/pinboard">Pinboard</a></li>
            <li><a href="/chatbox/join">Chatbox</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><a href="/signup">Create Account</a></li>
          </ul>
        </div>
      
    </Navbar>
  </header>
  <footer>
    <nav>
      <div></div>
      <div></div>
      <div>
        <ul>
          <li><h1>Hello. I am a footer</h1></li>
        </ul>
      </div>
    </nav>
  </footer>
  </>
)

export default Toolbar;