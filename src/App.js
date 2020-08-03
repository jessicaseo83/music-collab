
import React from 'react';

import Chat from './components/Chatbox/Chat/Chat';
import Join from './components/Chatbox/Join/Join';
import Dashboard from './components/Dashboard/Dashboard';
import Pinboard from './components/Pinboard/Pinboard';
import Search from './components/Search/Search';
import Toolbar from "./components/Toolbar/Toolbar";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
      <Route path="/chatbox/join" exact component={Join} />
      <Route path="/chatbox/chat" component={Chat} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/pinboard" component={Pinboard}/>
      <Route path="/search" component={Search}/>
    </Router>
    <div>
      <Toolbar/>
    </div>
    </>
  );
}

export default App;