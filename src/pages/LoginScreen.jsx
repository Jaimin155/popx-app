import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate('/profile');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F7F8F9',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        }}
      >
        <Typography variant="h5" component="h1" sx={{ mb: 3, fontWeight: 600 }}>
          Signin to your PopX account
        </Typography>
        <Typography variant="body2" sx={{ mb: 4, color: '#666' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 3 }}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#6C25FF',
              textTransform: 'none',
              py: 1.5,
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginScreen; 