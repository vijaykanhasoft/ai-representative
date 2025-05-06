import { SxProps, Theme } from '@mui/material';

export const styles = {
  // Form container with border and max width
  form: (theme: Theme) => ({
    p: 2,
    borderTop: `1px solid rgba(0, 24, 46, 0.1)`,
    maxWidth: "800px",
    width: "100%",
    margin: "0 auto",
    borderRadius: 0,
  } as SxProps<Theme>),

  // Input container with blur effect and border
  inputContainer: (theme: Theme) => ({
    display: "flex",
    gap: 1,
    alignItems: "center",
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: "24px",
    p: 1.5,
    border: '1px solid rgba(0, 24, 46, 0.2)',
    width: "100%",
    boxShadow: '0 4px 12px rgba(0, 24, 46, 0.1)',
  } as SxProps<Theme>),

  // Text field base styles
  textField: {
    "& .MuiInputBase-root": {
      minHeight: "40px",
    },
  } as SxProps<Theme>,

  // Text field input styles with placeholder
  textFieldInput: {
    fontSize: "1rem",
    color: 'rgba(0, 24, 46, 0.9)',
    "& .MuiInputBase-input": {
      py: 1,
      px: 1,
      lineHeight: 1.5,
      '&::placeholder': {
        color: 'rgba(0, 24, 46, 0.5)',
        opacity: 1,
      },
    },
  } as SxProps<Theme>,

  // Send button with conditional styling
  sendButton: (theme: Theme, hasInput: boolean) => ({
    bgcolor: hasInput ? '#00182e' : 'rgba(0, 24, 46, 0.1)',
    color: hasInput
      ? 'white'
      : 'rgba(0, 24, 46, 0.5)',
    "&:hover": {
      bgcolor: hasInput
        ? '#002a4d'
        : 'rgba(0, 24, 46, 0.2)',
    },
    transition: "all 0.2s ease-in-out",
    width: 36,
    height: 36,
    backdropFilter: 'blur(4px)',
  } as SxProps<Theme>),
}; 