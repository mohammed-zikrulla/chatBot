import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [], // Stores past conversations
  activeConversation: null, // Tracks the currently active conversation
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      if (state.activeConversation) {
        state.activeConversation.messages.push(action.payload);
      }
    },
    startConversation: (state) => {
      const newConversation = {
        id: Date.now(),
        messages: [],
      };
      state.conversations.push(newConversation);
      state.activeConversation = newConversation;
    },
    endConversation: (state, action) => {
      state.activeConversation = null;
    },
    setActiveConversation: (state, action) => {
      state.activeConversation = state.conversations.find(
        (conv) => conv.id === action.payload
      );
    },
  },
});

export const { addMessage, startConversation, endConversation, setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;
