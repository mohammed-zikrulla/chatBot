import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadConversation } from "../store/chatSlice";
import { List, ListItem, ListItemText, Drawer, Typography } from "@mui/material";

const ConversationList = () => {
  const dispatch = useDispatch();
  const { conversations } = useSelector((state) => state.chat);

  return (
    <Drawer variant="permanent" anchor="left">
      <Typography variant="h6" style={{ padding: "10px" }}>
        Past Conversations
      </Typography>
      <List>
        {conversations.map((conv) => (
          <ListItem 
            button 
            key={conv.id} 
            onClick={() => dispatch(loadConversation(conv.id))}
          >
            <ListItemText primary={`Conversation ${conv.id}`} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default ConversationList;
