import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    navigate('/profile');
  };

  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#F7F8F9',
      '& fieldset': {
        borderColor: '#F7F8F9',
      },
      '&:hover fieldset': {
        borderColor: '#6C25FF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#6C25FF',
      },
    },
  };

  const labelStyle = {
    fontSize: '14px',
    color: '#6C25FF',
    mb: 1,
    fontFamily: 'Rubik, sans-serif',
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
          Create your PopX account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            label="Full Name"
            name="fullName"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Phone number"
            name="phoneNumber"
            variant="outlined"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Email address"
            name="email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            fullWidth
            label="Company name"
            name="companyName"
            variant="outlined"
            value={formData.companyName}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
          <Typography variant="body1" sx={{ mb: 1 }}>
            Are you an Agency?*
          </Typography>
          <RadioGroup
            name="isAgency"
            value={formData.isAgency}
            onChange={handleChange}
            sx={{ mb: 3 }}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
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
            Create Account
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupScreen; 