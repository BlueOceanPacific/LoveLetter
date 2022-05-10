import React, { useState, useEffect } from 'react';
import Filter from 'bad-words';
import useStore from '../Store/store';
import MessagesList from './MessagesList';
import './Chat.scss';

function Chat({ socket }) {
  const [newMessageText, setNewMessageText] = useState('');
  const [messages, setMessages] = useState([]);
  const user = useStore((store) => store.user);
  const filter = new Filter();

  useEffect(() => {
    socket.on('chat', (chat) => {
      setMessages((prevMessages) => [...prevMessages, chat]);
    });
  }, []);
  
  const sendMessageHandler = () => {
    const chat = {
      id: Date.now(),
      username: user.username,
      message: newMessageText,
      timestamp: new Date().toLocaleTimeString('en-US').slice(0, -6)
    };

    if (chat.message.length === 0 || chat.message.length > 100) return;

    chat.message = filter.clean(chat.message);

    setMessages([...messages, chat]);
    socket.emit('chat', chat);
    setNewMessageText('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <MessagesList messages={messages} />
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
          onClick={sendMessageHandler}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
