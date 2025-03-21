import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, startConversation } from "../store/chatSlice";
import { IconButton, Typography } from "@mui/material";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import { ChatContainer, ChatBubble, StyledTextField, StyledButton } from "../styles";
import { useTheme } from "../context/ThemeContext";

const Chat = () => {
  const dispatch = useDispatch();
  const { activeConversation } = useSelector((state) => state.chat);
  const { toggleTheme } = useTheme();
  const [input, setInput] = useState("");
  const [hoverIndex, setHoverIndex] = useState(null);

  if (!activeConversation) {
    return (
      <ChatContainer maxWidth="sm" style={{ textAlign: "center" }}>
        <Typography variant="h5">No active conversation</Typography>
        <StyledButton variant="contained" onClick={() => dispatch(startConversation())}>
          Start New Chat
        </StyledButton>
        <StyledButton variant="contained" onClick={toggleTheme}>
          Toggle Dark Mode
        </StyledButton>
      </ChatContainer>
    );
  }

  const sendMessage = () => {
    if (!input.trim()) return;

    dispatch(addMessage({ sender: "user", text: input }));

    setTimeout(() => {
      dispatch(addMessage({ sender: "ai", text: "This is a mock AI response." }));
    }, 1000);

    setInput("");
  };

  return (
    <ChatContainer maxWidth="sm">
      <Typography variant="h4">AI Chat</Typography>

      <div>
        {activeConversation.messages?.map((msg, index) => (
          <div key={index} onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
            <ChatBubble isUser={msg.sender === "user"}>
              {msg.text}
            </ChatBubble>

            {msg.sender === "ai" && hoverIndex === index && (
              <>
                <IconButton size="small"><ThumbUp color="primary" /></IconButton>
                <IconButton size="small"><ThumbDown color="secondary" /></IconButton>
              </>
            )}
          </div>
        ))}
      </div>

      <StyledTextField 
        fullWidth 
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <StyledButton onClick={sendMessage} variant="contained">Send</StyledButton>
      <StyledButton variant="contained" onClick={toggleTheme}>Toggle Dark Mode</StyledButton>
    </ChatContainer>
  );
};

export default Chat;
