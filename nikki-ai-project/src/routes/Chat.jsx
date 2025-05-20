import React, { useState, useEffect } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import { getChats, postChat } from "../api/chatApi";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getChats().then(setMessages);
  }, []);

  const handleSend = async (text) => {
    const response = await postChat(text);
    setMessages((prev) => [...prev, response]);
  };

  return (
    <div>
      <h2>챗봇</h2>
      <div style={{ padding: 16, overflowY: "scroll", height: "60vh" }}>
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg} />
        ))}
      </div>
      <InputBox onSend={handleSend} />
    </div>
  );
};

export default Chat;