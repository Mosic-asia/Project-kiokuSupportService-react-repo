// src/components/InputBox.jsx
import React, { useState } from "react";
import MicIcon from "../assets/microphone.svg"; // 경로 확인 필요
import PlusIcon from "../assets/plus.svg";   // 경로 확인 필요
import SendIcon from "../assets/arrow-up.svg"; // 경로 확인 필요
import styles from "../styles/InputBox.module.css";

const InputBox = ({ onSend, onMicClick, isVoiceRecording }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const handleSendClick = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const handleMicClick = () => {
    onMicClick(); // 마이크 아이콘 클릭 시 onMicClick 함수 호출
  };

  return (
    <div className={styles.inputBox}>
      <div className={styles.iconButton} onClick={handleMicClick}> {/* 클릭 이벤트 핸들러 추가 */}
        <img src={MicIcon} alt="mic" className={styles.icon} />
      </div>
      <span className={styles.plusIcon}>+</span>
      <input
        type="text"
        className={styles.inputField}
        placeholder="話を始めましょう！"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={isVoiceRecording} // 음성 녹음 중 입력 비활성화 (선택 사항)
      />
      <button onClick={handleSendClick} className={styles.sendButton} disabled={isVoiceRecording && !text.trim()}>
        <img src={SendIcon} alt="send" className={styles.sendIcon} />
      </button>
    </div>
  );
};

export default InputBox;