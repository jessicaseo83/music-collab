import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Welcome to the chatbox <span role="img" aria-label="emoji">💬</span></h1>
      <h2>1) Invite other users to join you into your chatbox room and start collaborating! <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>2) Start chatting <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h3>People currently chatting:</h3>
            <div className="activeContainer">
              <h3>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h3>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;