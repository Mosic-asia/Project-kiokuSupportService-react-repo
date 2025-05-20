import React, { useState } from "react";
import MicIcon from "../assets/microphone.svg"; // 경로 확인 필요
import PlusIcon from "../assets/plus.svg";   // 경로 확인 필요
import SendIcon from "../assets/arrow-up.svg"; // 경로 확인 필요
import styles from "../styles/InputBox.module.css";

const InputBox = ({ onSend }) => {
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

  return (
    <div className={styles.inputBox}>
      <div className={styles.iconButton}>
        <img src={MicIcon} alt="mic" className={styles.icon} />
      </div>
      <span className={styles.plusIcon}>+</span>
      <input
        type="text"
        className={styles.inputField}
        placeholder="메시지를 입력하세요"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendClick} className={styles.sendButton}>
        <img src={SendIcon} alt="send" className={styles.sendIcon} />
      </button>
    </div>
  );
};

export default InputBox;