// src/Chat.jsx
import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import { getChats, postChat } from "../api/chatApi";
import CloudImage from "../assets/cloud.png";
import styles from "../styles/Chat.module.css";
import '../styles/ChatAnimation.css';
import MicIcon from '../assets/microphone.svg'; // 마이크 아이콘 경로 확인 (InputBox에서 사용하므로 여기서는 필수는 아님)

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);

  const chatAreaRef = useRef(null);
  const cloudAvatarRef = useRef(null);

  useEffect(() => {
    // ... 기존 useEffect ...
  }, []);

  const handleSend = async (text) => {
    // ... 기존 handleSend ...
  };

  const handleMicClick = () => {
    setIsVoiceRecording(!isVoiceRecording);
    if (chatAreaRef.current) {
      chatAreaRef.current.classList.toggle(styles.hiddenChatArea);
      chatAreaRef.current.scrollTop = 0; // 음성 녹음 시작 시 채팅 영역 맨 위로 스크롤 (선택 사항)
    }
    if (cloudAvatarRef.current) {
      cloudAvatarRef.current.classList.toggle(styles.expandedAvatar);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatArea} ref={chatAreaRef}>
        <div className={styles.cloudAvatarContainer}>
          <img src={CloudImage} alt="Cloud Avatar" className={styles.cloudAvatar} ref={cloudAvatarRef} />
        </div>
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} message={msg} />
        ))}
      </div>
      <div className={styles.inputBoxContainer}>
        <InputBox onSend={handleSend} onMicClick={handleMicClick} isVoiceRecording={isVoiceRecording} />
      </div>
      {isVoiceRecording && (
        <div className={styles.voiceBar}>
          {/* 음성 녹음 UI 요소 */}
          <p>음声録音中...</p>
          {/* 녹음 시간, 정지 버튼 등 추가 가능 */}
        </div>
      )}
    </div>
  );
};

export default Chat;