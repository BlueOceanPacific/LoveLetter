import React, { useRef, useEffect } from 'react';
import './Chat.scss';
import Message from './Message'

function MessagesList({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages]);

  return (
    <div>
      {messages.map((message) => (
        <Message
          messageBody={message.messageBody}
          username={message.username}
          timestamp={message.timestamp}
          key={message.id}
        />
      ))}
      <div
        ref={messagesEndRef}
      >
      </div>
    </div>
  );
}

export default MessagesList;
