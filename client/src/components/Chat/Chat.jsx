import React, { useState } from 'react';
import MessagesList from './MessagesList';
import { fakeData, addMessage } from './chatUtils';
import './Chat.scss';

function Chat() {
  const [newMessageText, setNewMessageText] = useState('');
  const [messages, setMessages] = useState(fakeData.messages);

  return (
    <div className="chat-container">
      <div
        className="chat-messages"
      >
        <MessagesList
          messages={messages}
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type to chat..."
          aria-label="User's chat message"
          value={newMessageText}
          onChange={(e) => {
            if (e.target.value.length < 100) {
              setNewMessageText(e.target.value);
            } else {
              alert('Chat is limited to 100 characters');
            }
          }}
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
