import React from 'react';
import './Chat.scss';

function Message({ messageBody, username }) {
  return (
    <div className="chat-message">
      <span className="chat-username">{` ${username}: `}</span>
      <span className="chat-message-body">{messageBody}</span>
    </div>
  );
}

export default Message;
