import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./ChatBoard.css";

const socket = io("http://localhost:5000"); // Make sure your server is running

function ChatBoard() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // Send your message
  const sendMessage = () => {
    if (message.trim()) {
      const msgData = {
        text: message,
        sender: "Me",
        timestamp: new Date().toLocaleTimeString(),
      };
      setChat((prev) => [...prev, msgData]); // show your message immediately
      socket.emit("send_message", msgData);  // send to server
      setMessage(""); // clear input
    }
  };

  // Listen for incoming messages
useEffect(() => {
  socket.on("receive_message", (data) => {
    console.log("📨 New message:", data); // 👈 Add this line
    setChat((prev) => [...prev, data]);
  });

  return () => {
    socket.off("receive_message");
  };
}, []);

  return (
    <div className="chat-board">
      <div className="chat-header">
        <h3>Chat</h3>
      </div>

      <div className="chat-messages">
        {chat.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            <strong>{msg.sender}: </strong>
            <span>{msg.text}</span>
            <small>{msg.timestamp}</small>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBoard;
