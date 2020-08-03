import React from 'react';
import logo from '../logo.svg';

const Toolbar = props => (
  <>
  <header> 
    <nav>
      <div></div>
      <div><img src={logo} className="App-logo" alt="logo"/></div>
      <div>
        <ul className="NavBar">
          <li><a href="/search">Search</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/chatbox/join">Chatbox</a></li>
          <li><a href="/pinboard">Pinboard</a></li>
        </ul>
      </div>
    </nav>
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