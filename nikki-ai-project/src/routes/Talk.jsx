import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "../components/ChatBubble";
import InputBox from "../components/InputBox";
import VoiceBar from "../components/VoiceBar";
import ErrorBanner from "../components/ErrorBanner";
import CloudImage from "../assets/cloud.png";
import styles from "../styles/Chat.module.css";
import "../styles/ChatAnimation.css";

// 퀴즈 더미 시나리오
const quizDummy = [
  {
    question: "Do you remember when you usually take your medicine?",
    answer: "8 PM",
    hint: "It's after dinner.",
    correctFeedback: "That's right! Well remembered.",
    wrongFeedback: "Hmm, not quite.",
  },
  {
    question: "Do you remember which day your daughter usually visits?",
    answer: "Saturday",
    hint: "It's the weekend.",
    correctFeedback: "That's right! Well remembered.",
    wrongFeedback: "Not quite. Try to remember the day!",
  },
];

const USER_ID = 1;

const Talk = () => {
  const [messages, setMessages] = useState([]);
  const [quizIdx, setQuizIdx] = useState(0);
  const [attempt, setAttempt] = useState(1);
  const [isVoiceRecording, setIsVoiceRecording] = useState(false);
  const [error, setError] = useState(null);
  const chatAreaRef = useRef(null);

  // 첫 진입 시 첫 질문
  useEffect(() => {
    if (quizDummy[quizIdx]) {
      setMessages([
        { sender: "other", text: quizDummy[quizIdx].question }
      ]);
    }
    // eslint-disable-next-line
  }, []);

  // 퀴즈 진행 (더미)
  const handleQuizStep = (user_response = null) => {
    if (!quizDummy[quizIdx]) return;
    const q = quizDummy[quizIdx];
    const newMessages = [];

    if (user_response) {
      newMessages.push({ sender: "user", text: user_response });

      if (user_response.trim().toLowerCase() === q.answer.toLowerCase()) {
        newMessages.push({ sender: "other", text: q.correctFeedback });
        // 다음 문제로 이동
        if (quizDummy[quizIdx + 1]) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              { sender: "other", text: quizDummy[quizIdx + 1].question }
            ]);
            setQuizIdx(quizIdx + 1);
            setAttempt(1);
          }, 1000);
        }
      } else if (attempt === 1) {
        newMessages.push({ sender: "other", text: `ヒント: ${q.hint}` });
        newMessages.push({ sender: "other", text: q.wrongFeedback });
        setAttempt(2);
      } else {
        newMessages.push({ sender: "other", text: `正解は: ${q.answer}` });
        // 다음 문제로 이동
        if (quizDummy[quizIdx + 1]) {
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              { sender: "other", text: quizDummy[quizIdx + 1].question }
            ]);
            setQuizIdx(quizIdx + 1);
            setAttempt(1);
          }, 1000);
        }
      }
    }

    setMessages((prev) => [...prev, ...newMessages]);
  };

  const handleSend = async (text) => {
    handleQuizStep(text);
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
              className={`
                ${styles.cloudAvatar}
                cloud-float
                ${isVoiceRecording ? styles.expandedAvatar : ""}
              `}
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

export default Talk;
