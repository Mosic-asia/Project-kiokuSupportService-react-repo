import React, { useState, useEffect } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import { getChats, postChat } from "../api/chatApi";
import CloudImage from "../assets/cloud.png";
import styles from "../styles/Chat.module.css";
import '../styles/ChatAnimation.css'; // 애니메이션 CSS 파일 import

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // getChats().then(setMessages);
    setMessages([
      { sender: 'other', text: '안녕하세요' },
      { sender: 'user', text: '오늘 할 일이 있었던 것 같은데...' },
    ]);
  }, []);

  const handleSend = async (text) => {
    // const response = await postChat(text);
    setMessages((prev) => [...prev, { sender: 'user', text }]);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatArea}>
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg} />
        ))}
      </div>
      <div className={`${styles.cloudAvatarContainer} cloud-float`}> {/* 클래스 이름 변경 */}
        <img src={CloudImage} alt="Cloud Avatar" className={styles.cloudAvatar} />
      </div>
      <div className={styles.inputBoxContainer}>
        <InputBox onSend={handleSend} />
      </div>
    </div>
  );
};

export default Chat;