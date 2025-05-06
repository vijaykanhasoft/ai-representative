import React from 'react';
import { AppBar, Toolbar, Typography, Chip } from '@mui/material';

interface HeaderProps {
  title: string;
  relevance?: string;
}

const Header: React.FC<HeaderProps> = ({ title, relevance }) => {
  // Get color based on relevance
  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'very big potential customer':
        return 'success';
      case 'hot lead':
        return 'warning';
      case 'weak lead':
        return 'info';
      default:
        return 'error';
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        {relevance && (
          <Chip 
            label={`Lead: ${relevance}`}
            color={getRelevanceColor(relevance) as any}
            sx={{ 
              borderRadius: '16px',
              '& .MuiChip-label': {
                px: 1.5
              }
            }}
          />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
