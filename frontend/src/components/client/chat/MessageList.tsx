import React, { useRef, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, Avatar, useTheme } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Message } from '../../../utils/types';
import { styles } from './MessageList.styles';

// Props for the message list component
interface MessageListProps {
  messages: Message[];
  userEmail?: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, userEmail }) => {
  // Ref for auto-scrolling to bottom
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const getInitials = (email: string) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box sx={styles.container}>
      <List sx={styles.messageList}>
        {messages.map((message, index) => {
          const isUser = message.role === 'user';
          return (
            <ListItem
              key={index}
              sx={styles.listItem(isUser)}
            >
              <Box sx={styles.messageBox(isUser)}>
                {/* User/AI avatar */}
                <Avatar sx={styles.avatar(isUser)}>
                  {isUser ? (
                    userEmail ? userEmail.charAt(0).toUpperCase() : 'U'
                  ) : (
                    <SmartToyIcon sx={styles.icon} />
                  )}
                </Avatar>

                {/* Message bubble */}
                <Paper sx={styles.messagePaper(isUser, theme)}>
                  <Typography variant="body2" sx={styles.messageText}>
                    {message.content}
                  </Typography>
                </Paper>
              </Box>
            </ListItem>
          );
        })}
        <div ref={messagesEndRef} />
      </List>
    </Box>
  );
};

export default MessageList; 