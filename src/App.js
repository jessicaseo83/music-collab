
import React, { Component} from 'react';

import Chat from './components/Chatbox/Chat/Chat';
import Join from './components/Chatbox/Join/Join';
import Dashboard from './components/Dashboard/Dashboard';
import Pinboard from './components/Pinboard/Pinboard';
import Search from './components/Search/Search';
import SignIn from './components/SignIn/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"


import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends Component {
  state= {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler= () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler =() => {
    this.setState({sideDrawerOpen: false});
  }

  render() {

  let sideDrawer;
  let backdrop;

  if(this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer/>;
    backdrop = <Backdrop click={this.backdropClickHandler}/>;
  }
  const user =false;
  return (
    <>
    <Router>

      <Route path="/chatbox/join">
      {user?<Join/>:<Redirect to="/signin"/>}
      </Route>

      <Route path="/chat">
      {user?<Chat/>:<Redirect to="/signin"/>}
      </Route> 


      <Route path="/dashboard">
      {user?<Dashboard/>:<Redirect to="/signin"/>}
      </Route> 

      <Route path="/pinboard">
      {user?<Pinboard/>:<Redirect to="/signin"/>}
      </Route>

      <Route path="/search">
      {user?<Search/>:<Redirect to="/signin"/>}
      </Route>

      <Route path="/signin">
      {user?<Redirect to="/search"/>:<SignIn/>}
      </Route>

      <Route path="/signup">
      {user?<Redirect to="/search"/>:<SignUp/>}
      </Route>

    </Router>
    <div style={{height: "100%"}}>
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
    </div>
    </>
  );
}
}

export default App;