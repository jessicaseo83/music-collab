
import React, { Component} from 'react';

import Chat from './components/Chatbox/Chat/Chat';
import Join from './components/Chatbox/Join/Join';
import Dashboard from './components/Dashboard/Dashboard';
import Pinboard from './components/Pinboard/Pinboard';
import Search from './components/Search/Search';

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state= {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler= () => {
    this.setState((prevState) => {
      return{sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  render() {

  let sideDrawer;
  let backdrop;

  if(this.state.sideDrawerOpen) {
    sideDrawer = <SideDrawer/>;
    backdrop = <Backdrop/>;
  }
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
      <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
    </div>
    </>
  );
}
}

export default App;