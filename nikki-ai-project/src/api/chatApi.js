export const getChats = async () => {
  const res = await fetch("/chat");
  return res.json();
};

export const postChat = async (text) => {
  const res = await fetch("/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: text }),
  });
  return res.json();
};