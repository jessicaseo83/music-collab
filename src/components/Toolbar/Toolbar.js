import React from 'react';

const Toolbar = props => (
  <>
  <header> 
    <nav>
      <div></div>
      <div><a href="/"> THE LOGO</a></div>
      <div>
        <ul>
          <li><a href="/search">Search</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/chatbox">Chatbox</a></li>
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