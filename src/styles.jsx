import styled from "styled-components";

// Sidebar Styles
export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background: ${({ theme }) => theme.sidebarBg};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  overflow-y: auto;
`;

export const ConversationItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  background: ${({ theme }) => theme.cardBg};
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.cardHover};
  }
`;

// Header Styles
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

export const ToggleButton = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;

// Chat Styles
export const ChatContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const ChatBubble = styled.div`
  background: ${({ sender, theme }) => (sender === "user" ? theme.userBubble : theme.aiBubble)};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  max-width: 60%;
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
`;

export const FeedbackIcons = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 10px;
`;

// Chat Input Styles
export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background: ${({ theme }) => theme.inputBg};
`;

export const StyledTextField = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
`;

export const SendButton = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 5px;
`;

// App Layout
export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
