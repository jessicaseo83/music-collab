
import React from 'react';

import Chat from './components/Chatbox/Chat/Chat';
import Join from './components/Chatbox/Join/Join';
import Dashboard from './components/Dashboard/Dashboard';
import Pinboard from './components/Pinboard/Pinboard';
import Search from './components/Search/Search';

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  state= {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler= () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  return (
    <>
    <Router>
      <Route path="/chatbox/join" exact component={Join} />
      <Route path="/chatbox/chat" component={Chat} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/pinboard" component={Pinboard}/>
      <Route path="/search" component={Search}/>
    </Router>
    <div style={{height: "100%"}}>
      <Toolbar/>
      <SideDrawer/>
      <Backdrop/>
    </div>
    </>
  );
}

export default App;