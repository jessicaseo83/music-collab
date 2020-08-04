import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '/Users/michel/lighthouse/music-collab/src/components/Chatbox/Messages/Messages/Messages.js';

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

export default Messages;