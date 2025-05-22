// src/routes/Chat.jsx
import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import VoiceBar from "../components/VoiceBar";
import { getChats, postChat } from "../api/chatApi";
import CloudImage from "../assets/cloud.png";
import styles from "../styles/Chat.module.css";
import '../styles/ChatAnimation.css';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'other', text: 'こんにちは！' },
    { sender: 'user', text: '何かお手伝いできることはありますか？' },
  ]);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);

  const chatAreaRef = useRef(null);

  useEffect(() => {
    // getChats().then(setMessages);
  }, []);

  const handleSend = async (text) => {
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    // const response = await postChat(text);
  };

  const handleMicClick = () => {
    setIsVoiceRecording(true);
  };

  const handleStopRecording = () => {
    setIsVoiceRecording(false);
    // 실제 음성 인식 종료 및 처리 로직 추가
  };

  return (
    <div className={styles.chatContainer}>
      {/* 항상 보여야 하는 채팅 영역 + 캐릭터 */}
      <div className={styles.chatContentWrapper}>
        <div className={styles.chatArea} ref={chatAreaRef}>
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} message={msg} />
          ))}
        </div>
        <div className={styles.cloudAvatarContainer}>
          <img
            src={CloudImage}
            alt="Cloud Avatar"
            className={`${styles.cloudAvatar} cloud-float`}
          />
        </div>
      </div>

      {/* 인풋 박스는 보이스 모드 아닐 때만 */}
      {!isVoiceRecording && (
        <div className={styles.inputBoxContainer}>
          <InputBox
            onSend={handleSend}
            onMicClick={handleMicClick}
            isVoiceRecording={isVoiceRecording}
          />
        </div>
      )}

      {/* 보이스 모드일 때만 보이스 바 */}
      {isVoiceRecording && <VoiceBar onStopRecording={handleStopRecording} />}
    </div>
  );
};

export default Chat;