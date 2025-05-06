import { SxProps, Theme } from '@mui/material';

export const styles = {
  // Form container with elevation and spacing
  form: {
    p: 2,
    m: 2,
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  } as SxProps<Theme>,

  // Title styling
  title: {
    mb: 2,
    color: '#00182e',
    fontWeight: 500,
  } as SxProps<Theme>,

  // Input field container
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  } as SxProps<Theme>,

  // Text field with icon
  textField: {
    '& .MuiInputBase-root': {
      minHeight: '56px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      },
      '&.Mui-focused': {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 24, 46, 0.2)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 24, 46, 0.3)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#00182e',
    },
  } as SxProps<Theme>,

  // Icon styling in text field
  inputIcon: {
    mr: 1,
    color: '#00182e',
  } as SxProps<Theme>,

  // Button container with flex layout
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 2,
  } as SxProps<Theme>,

  // Submit button with conditional styling
  submitButton: {
    bgcolor: '#00182e',
    color: 'white',
    px: 3,
    py: 1,
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 500,
    '&:hover': {
      bgcolor: '#002a4d',
      boxShadow: '0 2px 4px rgba(0, 24, 46, 0.2)',
    },
  } as SxProps<Theme>,
}; 