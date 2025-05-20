const ChatBubble = ({ message }) => {
  return (
    <div
      style={{
        textAlign: message.sender === "user" ? "right" : "left",
        margin: "8px 0"
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "10px 14px",
          backgroundColor: message.sender === "user" ? "#cbe4ff" : "#eee",
          borderRadius: "16px",
          maxWidth: "60%",
        }}
      >
        {message.text}
      </span>
    </div>
  );
};
export default ChatBubble;