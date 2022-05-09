import React, { useState } from 'react';
import Message from './Message';
import { fakeData, addMessage } from './chatUtils';
import './Chat.scss';

// TODO
// - CHAR LIMIT ON INPUT (50)

function Chat() {
  const [newMessageText, setNewMessageText] = useState('');
  const [messages, setMessages] = useState(fakeData.messages);

  return (
    <div className="chat-container">
      <div className="overflow-auto chat-messages">
        {messages.map((message) => (
          <Message
            messageBody={message.messageBody}
            username={message.username}
            timestamp={message.timestamp}
            key={message.id}
          />
        ))}
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type to chat..."
          aria-label="User's chat message"
          value={newMessageText}
          onChange={(e) => setNewMessageText(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={() => {
            addMessage(newMessageText);
            setMessages(() => ([...fakeData.messages]));
            setNewMessageText('');
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
