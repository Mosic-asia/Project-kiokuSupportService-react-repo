import React, { useEffect, useState, useRef } from "react";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // 채팅 스크롤 항상 아래로
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 처음 로딩 시 기존 채팅 불러오기
  useEffect(() => {
    fetch("/chat")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(console.error);
  }, []);

  // 메시지 전송
  const handleSend = async () => {
    if (!input.trim()) return;

    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, data]);
      setInput("");
    } catch (err) {
      console.error("전송 실패", err);
    }
  };

  // Enter 키 입력 처리
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  // 전체 삭제
  const handleClear = async () => {
    await fetch("/chat", { method: "DELETE" });
    setMessages([]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2>🌙 ChatBot</h2>
        <button onClick={handleClear} style={styles.clearBtn}>
          🗑️ 삭제
        </button>
      </div>

      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <div style={{ ...styles.bubbleWrapper, justifyContent: "flex-end" }}>
              <div style={styles.userBubble}>{msg.user_message}</div>
            </div>
            <div style={{ ...styles.bubbleWrapper, justifyContent: "flex-start" }}>
              <div style={styles.botBubble}>{msg.bot_message}</div>
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div style={styles.inputBox}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메시지를 입력하세요..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.sendBtn}>전송</button>
      </div>
    </div>
  );
};

export default Home;