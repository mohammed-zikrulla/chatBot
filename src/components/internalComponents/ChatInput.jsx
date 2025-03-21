import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/chatSlice";
import { InputContainer, StyledTextField, SendButton } from "../../styles";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (!input.trim()) return;

    dispatch(addMessage({ sender: "user", text: input }));
    setInput("");
  };

  return (
    <InputContainer>
      <StyledTextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
      />
      <SendButton onClick={sendMessage}>Send</SendButton>
    </InputContainer>
  );
};

export default ChatInput;
