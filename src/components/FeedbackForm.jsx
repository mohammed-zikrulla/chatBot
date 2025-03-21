import React, { useState } from "react";
import { Button, Rating, TextField, Container, Typography } from "@mui/material";

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Container>
      <Typography variant="h6">Rate this Conversation</Typography>
      <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
      
      <TextField 
        fullWidth 
        multiline 
        rows={3} 
        value={comment} 
        onChange={(e) => setComment(e.target.value)} 
        placeholder="Your feedback..."
      />
      
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => onSubmit({ rating, comment })}
      >
        Submit Feedback
      </Button>
    </Container>
  );
};

export default FeedbackForm;
