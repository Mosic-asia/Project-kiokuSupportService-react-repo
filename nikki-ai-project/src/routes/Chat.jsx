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
    <div className="flex flex-col h-screen bg-white">
      {/* 상단 제목 */}
      <div className="px-4 py-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Project 名前</h2>
        {/* 오른쪽 아이콘 영역은 필요하면 추가 */}
      </div>

      {/* 채팅 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg} />
        ))}
      </div>

      {/* 인풋 영역 */}
      <div className="px-4 py-2">
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
};

export default Chat;