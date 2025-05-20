// 예: chatApi.js
export const getChats = async () => {
  const res = await fetch("/api/chat");
  if (!res.ok) {
    throw new Error("Failed to fetch chats");
  }
  return res.json(); // HTML이 아닌 JSON이 반환되어야 함
};

export const postChat = async (text) => {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) {
    throw new Error("Failed to post chat");
  }
  return res.json();
};