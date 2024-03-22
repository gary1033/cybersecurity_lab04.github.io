import React, { useState } from 'react';
import './ChatRoom.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        text: currentMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage('');
    }
  };

  return (
    <div className="chatroom-container">
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;