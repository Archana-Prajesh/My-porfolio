import React, { useState } from 'react';
import './Footer.css'; // or use CSS module
import ChatBoard from './ChatBoard';

const Footer = () => {
const [isChatOpen, setIsChatOpen] = useState(false);
 const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
    <div className="App">
      <button className="chat-button" onClick={toggleChat}>
      Chat
      </button>
      {isChatOpen && <ChatBoard onClose={toggleChat} />}
    </div>
    </>
  );
};

export default Footer;