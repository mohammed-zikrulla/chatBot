import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveConversation } from "../../store/chatSlice";
import { SidebarContainer, ConversationItem } from "../../styles";

const Sidebar = () => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.chat.conversations);

  return (
    <SidebarContainer>
      <h3>Conversations</h3>
      {conversations.map((conv, index) => (
        <ConversationItem
          key={index}
          onClick={() => dispatch(setActiveConversation(conv.id))}
        >
          Conversation {index + 1}
        </ConversationItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
