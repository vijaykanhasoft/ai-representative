import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { useNavigate } from 'react-router-dom';

// Props for the main layout component
interface MainLayoutProps {
  children: React.ReactNode;
  userEmail?: string;
  companyName?: string;
  menuItems?: { label: string; path: string }[];
  rightContent?: React.ReactNode;
}

// Custom styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#ffffff',
  color: theme.palette.text.primary,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  minHeight: '64px !important'
});

// Nav link with hover effect
const MenuLink = styled(Typography)(({ theme }) => ({
  color: '#00182e',
  cursor: 'pointer',
  fontWeight: 500,
  '&:hover': {
    color: '#002a4d',
  },
}));

// Footer with border top
const Footer = styled('footer')(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  userEmail, 
  companyName,
  menuItems = [],
  rightContent
}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Menu handlers
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Get first letter of email for avatar
  const getInitials = (email: string) => {
    return email ? email.charAt(0).toUpperCase() : 'U';
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundImage: 'url("https://elements-resized.envatousercontent.com/elements-video-cover-images/06289631-c9c6-4e5a-aa04-6f87bdc23005/video_preview/video_preview_0000.jpg?w=1600&cf_fit=cover&q=85&format=auto&s=fde6725212cfb20f4644a409ceb68fba85f96bce0a97a208950b20aa868bd429")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'hidden',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(5px)',
        zIndex: 0
      }
    }}>
      <StyledAppBar position="static" sx={{ position: 'relative', zIndex: 3 }}>
        <StyledToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <SmartToyIcon sx={{ color: '#00182e', fontSize: 28 }} />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              KanhaSoft
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {menuItems.length > 0 ? (
              // Admin menu items
              menuItems.map((item) => (
                <MenuLink 
                  key={item.path} 
                  variant="body1"
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </MenuLink>
              ))
            ) : (
              // Home page menu
              <MenuLink 
                variant="body1"
                onClick={() => navigate('/')}
              >
                Your AI Partner
              </MenuLink>
            )}
            {rightContent}
            {userEmail && !rightContent && (
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                sx={{ 
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    fontSize: '0.875rem',
                    bgcolor: '#00182e'
                  }
                }}
              >
                <Avatar>
                  {getInitials(userEmail)}
                </Avatar>
              </IconButton>
            )}
          </Box>

          {/* User profile dropdown */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <Typography variant="body2" color="text.secondary">
                {userEmail}
              </Typography>
            </MenuItem>
            {companyName && (
              <MenuItem>
                <Typography variant="body2" color="text.secondary">
                  {companyName}
                </Typography>
              </MenuItem>
            )}
          </Menu>
        </StyledToolbar>
      </StyledAppBar>

      {/* Main content area */}
      <Container 
        component="main" 
        sx={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          py: 3,
          overflow: 'visible',
          position: 'relative',
          zIndex: 1,
          height: 'calc(100vh - 140px)'
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(10px)',
            borderRadius: '24px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            height: 'calc(100% - 24px)',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'lg',
            mx: 'auto',
            width: '100%',
            mt: 3,
            overflow: 'hidden'
          }}
        >
          {children}
        </Paper>
      </Container>

      {/* Footer with copyright */}
      <Footer sx={{ position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} KanhaSoft. All rights reserved.
          </Typography>
        </Container>
      </Footer>
    </Box>
  );
};

export default MainLayout; 