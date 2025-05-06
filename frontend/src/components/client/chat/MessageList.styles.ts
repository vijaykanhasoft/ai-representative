import { SxProps, Theme } from '@mui/material';

export const styles = {
  // Main container with flex layout
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'transparent'
  } as SxProps<Theme>,

  // Scrollable message list with custom scrollbar
  messageList: {
    flex: 1,
    overflow: 'auto',
    px: 2,
    py: 1,
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(0, 24, 46, 0.2)',
      borderRadius: '4px',
    },
  } as SxProps<Theme>,

  // List item alignment based on message sender
  listItem: (isUser: boolean) => ({
    display: 'flex',
    justifyContent: isUser ? 'flex-end' : 'flex-start',
    px: 1,
    py: 0.75,
    mb: 0.5
  } as SxProps<Theme>),

  // Message box layout with avatar
  messageBox: (isUser: boolean) => ({
    display: 'flex',
    flexDirection: isUser ? 'row-reverse' : 'row',
    alignItems: 'flex-start',
    maxWidth: '80%',
    gap: 1,
  } as SxProps<Theme>),

  // Avatar styling with conditional colors
  avatar: (isUser: boolean) => ({
    bgcolor: isUser ? '#00182e' : 'secondary.main',
    width: 28,
    height: 28,
    fontSize: '0.75rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    mt: 0.5,
    ml: isUser ? 0.5 : 0,
    mr: isUser ? 0 : 0.5
  } as SxProps<Theme>),

  // Message bubble with tail and conditional styling
  messagePaper: (isUser: boolean, theme: Theme) => ({
    p: 1.25,
    backgroundColor: isUser 
      ? '#00182e'
      : 'rgba(255, 255, 255, 0.9)',
    color: isUser ? 'white' : 'text.primary',
    borderRadius: 2,
    position: 'relative',
    ml: isUser ? 0 : 0.5,
    mr: isUser ? 0.5 : 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '10px',
      [isUser ? 'right' : 'left']: '-6px',
      width: '12px',
      height: '12px',
      backgroundColor: isUser 
        ? '#00182e'
        : 'rgba(255, 255, 255, 0.9)',
      transform: 'rotate(45deg)',
      zIndex: 0,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '10px',
      [isUser ? 'right' : 'left']: '-6px',
      width: '12px',
      height: '12px',
      backgroundColor: isUser 
        ? '#00182e'
        : 'rgba(255, 255, 255, 0.9)',
      transform: 'rotate(45deg)',
      zIndex: 1,
    }
  } as SxProps<Theme>),

  // Message text styling
  messageText: {
    position: 'relative',
    zIndex: 2,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    fontSize: '0.875rem',
    lineHeight: 1.4
  } as SxProps<Theme>,

  // Icon styling for AI avatar
  icon: {
    fontSize: '1rem'
  } as SxProps<Theme>
}; 