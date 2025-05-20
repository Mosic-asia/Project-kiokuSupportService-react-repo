import React from "react";

const ChatBubble = ({ message }) => {
  const isUser = message.sender === "user"; // Adjust based on your message object

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-xl py-2 px-3 text-white ${
          isUser ? "bg-blue-500" : "bg-gray-300 text-gray-800"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatBubble;