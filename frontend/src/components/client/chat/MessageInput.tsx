import React, { useState } from "react";
import { Box, TextField, IconButton, useTheme } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { styles } from "./MessageInput.styles";

// Props for the message input component
interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  // State for input field
  const [message, setMessage] = useState("");
  const theme = useTheme();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={styles.form(theme)}
    >
      <Box sx={styles.inputContainer(theme)}>
        <TextField
          fullWidth
          multiline
          maxRows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          variant="standard"
          sx={styles.textField}
          InputProps={{
            disableUnderline: true,
            sx: styles.textFieldInput,
          }}
        />

        <IconButton
          type="submit"
          disabled={!message.trim()}
          sx={styles.sendButton(theme, Boolean(message.trim()))}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default MessageInput;
