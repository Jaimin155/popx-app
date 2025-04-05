import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <Container 
      maxWidth={false} 
      disableGutters 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      
      <Box
        sx={{
          width: '375px',
          height: '812px',
          backgroundColor: '#fff',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ textAlign: 'start' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: '28px',
              fontFamily: 'Rubik, sans-serif',
              fontWeight: 'medium',
              color: '#1D2226',
              mb: 1
            }}
          >
            Welcome to PopX
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '16px',
              fontFamily: 'Rubik, sans-serif',
              color: '#1D2226',
              opacity: 0.6,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <br></br>
        </Box>
        <Box sx={{ width: '100%', mb: 4 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate('/signup')}
            sx={{
              backgroundColor: '#6C25FF',
              color: '#fff',
              textTransform: 'none',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '16px',
              fontWeight: 'medium',
              padding: '12px',
              borderRadius: '6px',
              mb: 2,
              '&:hover': {
                backgroundColor: '#5820CC',
              },
            }}
          >
            Create Account
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate('/login')}
            sx={{
              borderColor: '#CBCBCB',
              backgroundColor: '#F7F8F9',
              color: '#1D2226',
              textTransform: 'none',
              fontFamily: 'Rubik, sans-serif',
              fontSize: '16px',
              fontWeight: 'medium',
              padding: '12px',
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: '#EBEDF0',
                borderColor: '#CBCBCB',
              },
            }}
          >
            Already Registered? Login
          </Button>
        </Box>        
      </Box>
    </Container>
  );
};

export default LandingScreen; 