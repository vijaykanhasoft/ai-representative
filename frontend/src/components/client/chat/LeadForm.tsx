import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import validationService from '../../../services/validationService';

interface LeadFormProps {
  leadInfo: {
    email: string;
    companyName: string;
  };
  setLeadInfo: React.Dispatch<React.SetStateAction<{
    email: string;
    companyName: string;
    relevance?: string;
  }>>;
  onSubmit: (e: React.FormEvent) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ leadInfo, setLeadInfo, onSubmit }) => {
  const [errors, setErrors] = useState({
    email: '',
    companyName: ''
  });
  
  const [touched, setTouched] = useState({
    email: false,
    companyName: false
  });

  const handleChange = (field: 'email' | 'companyName', value: string) => {
    // Update the lead info
    setLeadInfo({ ...leadInfo, [field]: value });
    
    // Mark field as touched
    if (!touched[field]) {
      setTouched({ ...touched, [field]: true });
    }
    
    // Validate and update errors
    const error = validationService.validate(field, value);
    setErrors({ ...errors, [field]: error });
  };

  const handleBlur = (field: 'email' | 'companyName') => {
    // Mark as touched on blur
    setTouched({ ...touched, [field]: true });
    
    // Validate on blur
    const error = validationService.validate(field, leadInfo[field]);
    setErrors({ ...errors, [field]: error });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors = {
      email: validationService.validate('email', leadInfo.email),
      companyName: validationService.validate('companyName', leadInfo.companyName)
    };
    
    setErrors(newErrors);
    setTouched({ email: true, companyName: true });
    
    // Only submit if there are no errors
    if (!newErrors.email && !newErrors.companyName) {
      onSubmit(e);
    }
  };

  // Check if form is valid
  const isFormValid = 
    !errors.email && 
    !errors.companyName && 
    !!leadInfo.email && 
    !!leadInfo.companyName;

  return (
    <Paper 
      sx={{ 
        p: 2, 
        m: 2,
        borderRadius: '8px',
      }} 
      elevation={3}
    >
      <Typography 
        variant="h6" 
        gutterBottom
      >
        Tell us about yourself
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={leadInfo.email}
          onChange={(e) => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          required
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          InputProps={{
            startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
        
        <TextField
          fullWidth
          label="Company Name"
          variant="outlined"
          margin="normal"
          value={leadInfo.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
          onBlur={() => handleBlur('companyName')}
          required
          error={touched.companyName && !!errors.companyName}
          helperText={touched.companyName && errors.companyName}
          InputProps={{
            startAdornment: <BusinessIcon sx={{ mr: 1, color: 'action.active' }} />
          }}
        />
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            disabled={!isFormValid}
            sx={{
              bgcolor: '#00182e',
              '&:hover': {
                bgcolor: '#002a4d',
              },
            }}
          >
            Start Conversation
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default LeadForm; 