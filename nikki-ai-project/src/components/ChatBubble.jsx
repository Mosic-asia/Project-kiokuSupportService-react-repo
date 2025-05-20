import React from "react";
import styles from "../styles/ChatBubble.module.css";

const ChatBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`${styles.chatBubbleContainer} ${isUser ? styles.userBubbleContainer : styles.otherBubbleContainer}`}>
      <div className={`${styles.bubble} ${isUser ? styles.userBubble : styles.otherBubble}`}>
        {message.text}
      </div>
    </div>
  );
};

export default ChatBubble;