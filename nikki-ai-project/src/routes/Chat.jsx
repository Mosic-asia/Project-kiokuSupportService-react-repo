import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import VoiceBar from "../components/VoiceBar";
import ErrorBanner from "../components/ErrorBanner";
import CloudImage from "../assets/cloud.png";
import styles from "../styles/Chat.module.css";
import "../styles/ChatAnimation.css";

// 더미 데이터 시나리오
const chatDummy = [
  {
    sender: "other",
    text: "Good morning! Did you have breakfast today?",
    timestamp: "2025-05-19T17:30:00",
  },
  {
    sender: "user",
    text: "Yes, I had toast and tea.",
    timestamp: "2025-05-19T17:31:00",
  },
  {
    sender: "other",
    text: "That sounds nice! Do you usually eat breakfast at this time?",
    timestamp: "2025-05-19T17:32:00",
  },
];

const aiReplies = [
  "That sounds delicious! What did you have with your tea?",
  "Do you take any medicine in the morning?",
  "Thanks for sharing! How are you feeling today?",
];

const USER_ID = 1;

const Chat = () => {
  const [messages, setMessages] = useState([chatDummy[0]]);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [error, setError] = useState(null);
  const chatAreaRef = useRef(null);
  const [aiIndex, setAiIndex] = useState(0);

  // 더미: 첫 메시지만 보여주고, 나머지는 입력 시 추가
  const handleSend = async (text) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text, timestamp: new Date().toISOString() },
    ]);
    // 1초 후 AI 답변 추가 (더미)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "other",
          text: aiReplies[aiIndex % aiReplies.length],
          timestamp: new Date().toISOString(),
        },
      ]);
      setAiIndex((idx) => idx + 1);
    }, 700);
  };

  const handleMicClick = () => setIsVoiceRecording(true);
  const handleStopRecording = () => setIsVoiceRecording(false);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTo({
        top: chatAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatContentWrapper}>
        <div className={styles.topFade} />
        <div className={styles.chatArea} ref={chatAreaRef}>
          {messages.map((msg, idx) => (
            <ChatBubble key={idx} message={msg} />
          ))}
        </div>
        <div className={styles.cloudAvatarContainer}>
          <div className={styles.cloudAvatarWrapper}>
            <img
              src={CloudImage}
              alt="Cloud Avatar"
              className={`${styles.cloudAvatar} cloud-float ${isVoiceRecording ? styles.expandedAvatar : ""}`}
            />
          </div>
        </div>
      </div>

      <ErrorBanner message={error} onClose={() => setError(null)} />

      {!isVoiceRecording && (
        <div className={styles.inputBoxContainer}>
          <InputBox
            onSend={handleSend}
            onMicClick={handleMicClick}
            isVoiceRecording={isVoiceRecording}
          />
        </div>
      )}

      {isVoiceRecording && <VoiceBar onStopRecording={handleStopRecording} />}
    </div>
  );
};

export default Chat;
