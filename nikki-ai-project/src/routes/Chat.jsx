import React, { useState, useEffect } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import { getChats, postChat } from "../api/chatApi";
import CloudImage from "../assets/cloud.png"; // Import the cloud image

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
    <div className="flex flex-col h-screen bg-gray-100"> {/* Changed background color for better visual separation */}
      {/* 채팅 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <div className="flex justify-center mb-4">
          <img src={CloudImage} alt="Cloud Avatar" className="w-32 h-32" /> {/* Placeholder Cloud Image */}
        </div>
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg} />
        ))}
      </div>

      {/* 인풋 영역 */}
      <div className="bg-white px-4 py-3 border-t border-gray-200"> {/* Added background and border */}
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
};

export default Chat;