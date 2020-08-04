import React from 'react'
import "./SideDrawer.css"
const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><a href="/search">Search</a></li>
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/chatbox/join">Chatbox</a></li>
      <li><a href="/pinboard">Pinboard</a></li>
    </ul>
  </nav>
);

export default sideDrawer;