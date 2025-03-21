import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChatContainer, ChatBubble, FeedbackIcons } from "../../styles";
import { ThumbUp, ThumbDown } from "@mui/icons-material";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { activeConversation } = useSelector((state) => state.chat);
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <ChatContainer>
      {activeConversation?.messages.map((msg, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <ChatBubble sender={msg.sender}>{msg.text}</ChatBubble>
          {msg.sender === "ai" && hoverIndex === index && (
            <FeedbackIcons>
              <ThumbUp color="primary" />
              <ThumbDown color="secondary" />
            </FeedbackIcons>
          )}
        </div>
      ))}
      <ChatInput />
    </ChatContainer>
  );
};

export default Chat;
