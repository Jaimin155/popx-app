import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import LandingScreen from './pages/LandingScreen';
import LoginScreen from './pages/LoginScreen';
import SignupScreen from './pages/SignupScreen';
import ProfileScreen from './pages/ProfileScreen';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
    h1: {
      fontSize: '28px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: '#6C25FF',
      dark: '#5820CC',
    },
    text: {
      primary: '#1D2226',
      secondary: '#1D2226',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          textTransform: 'none',
          padding: '12px',
          fontSize: '16px',
          fontWeight: 500,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
            
    </ThemeProvider>
  );
}

export default App; 