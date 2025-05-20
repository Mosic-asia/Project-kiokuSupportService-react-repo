import React, { useState } from "react";
import MicIcon from "../assets/microphone.svg";
import PlusIcon from "../assets/plus.svg";
import SendIcon from "../assets/arrow-up.svg";

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
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
      <img src={MicIcon} alt="mic" className="h-6 w-6" />
      <img src={PlusIcon} alt="plus" className="h-6 w-6 text-gray-500" />
      </div>
      <input
        type="text"
        className="flex-1 border rounded-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="메시지를 입력하세요"
        value={text}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendClick} className="bg-blue-500 text-white rounded-full p-2">
        <img src={SendIcon} alt="send" className="h-5 w-5" />
      </button>
    </div>
  );
};

export default InputBox;