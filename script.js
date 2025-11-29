const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");

// Bot reply logic
function botReply(message) {
  message = message.toLowerCase();

  if (message.includes("hi") || message.includes("hello")) return "Hi 👋 How can I help you?";
  if (message.includes("name")) return "I'm your smart chatbot!";
  if (message.includes("creator")) return "I was created by you 😎";
  if (message.includes("bye")) return "Goodbye! Take care 😊";
  if (message.includes("help")) return "You can ask anything…";

  return "Sorry, I didn't understand 🤖";
}

// Add message to chat
function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 600);
});
