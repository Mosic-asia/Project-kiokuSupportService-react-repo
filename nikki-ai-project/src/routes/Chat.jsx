// src/Chat.jsx
import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import VoiceBar from "../components/VoiceBar"; // VoiceBar 컴포넌트 import
import { getChats, postChat } from "../api/chatApi";
import CloudImage from "../assets/cloud.png";
import styles from "../styles/Chat.module.css";
import '../styles/ChatAnimation.css';
import MicIcon from '../assets/microphone.png';

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'other', text: 'こんにちは！' },
    { sender: 'user', text: '何かお手伝いできることはありますか？' },
  ]);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);

  const chatAreaRef = useRef(null);
  const inputBoxContainerRef = useRef(null); // 인풋 박스 컨테이너 ref

  useEffect(() => {
    // getChats().then(setMessages);
  }, []);

  const handleSend = async (text) => {
    setMessages((prev) => [...prev, { sender: 'user', text }]);
    // const response = await postChat(text);
  };

  const handleMicClick = () => {
    setIsVoiceRecording(!isVoiceRecording);
    if (chatAreaRef.current) {
      chatAreaRef.current.classList.toggle(styles.hiddenChatArea);
      chatAreaRef.current.scrollTop = 0;
    }
    // 인풋 박스 visibility 제어
    if (inputBoxContainerRef.current) {
      inputBoxContainerRef.current.style.display = isVoiceRecording ? 'none' : 'flex';
    }
  };

  const handleStopRecording = () => {
    setIsVoiceRecording(false);
    if (chatAreaRef.current) {
      chatAreaRef.current.classList.remove(styles.hiddenChatArea);
    }
    // 인풋 박스 visibility 제어
    if (inputBoxContainerRef.current) {
      inputBoxContainerRef.current.style.display = 'flex';
    }
    // 실제 음성 인식 종료 및 처리 로직 추가
  };

  return (
    <div className={styles.chatContainer}>
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
      <div className={styles.inputBoxContainer} ref={inputBoxContainerRef} style={{ display: isVoiceRecording ? 'none' : 'flex' }}>
        <InputBox onSend={handleSend} onMicClick={handleMicClick} isVoiceRecording={isVoiceRecording} />
      </div>
      {isVoiceRecording && <VoiceBar onStopRecording={handleStopRecording} />}
    </div>
  );
};

export default Chat;