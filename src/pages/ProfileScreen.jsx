import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const ProfileScreen = () => {
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
        <Typography 
          variant="h5" 
          sx={{ 
            fontSize: '20px',
            fontWeight: 500,
            color: '#1D2226',
            mb: 3 
          }}
        >
          Account Settings
        </Typography>

        <Box
          sx={{
            backgroundColor: '#F7F8F9',
            borderRadius: '8px',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '16px',
            mb: 3,
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <Avatar
              src="https://i.pravatar.cc/150?img=44"
              sx={{
                width: 76,
                height: 76,
                border: '2px solid #fff',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -4,
                right: -4,
                backgroundColor: '#6C25FF',
                borderRadius: '50%',
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #fff',
              }}
            >
              <CameraAltIcon sx={{ color: '#fff', fontSize: 14 }} />
            </Box>
          </Box>

          <Box>
            <Typography 
              sx={{ 
                fontSize: '16px',
                fontWeight: 500,
                color: '#1D2226',
                mb: 0.5
              }}
            >
              Marry Doe
            </Typography>
            <Typography 
              sx={{ 
                fontSize: '14px',
                color: '#1D2226',
                opacity: 0.7
              }}
            >
              Marry@Gmail.Com
            </Typography>
          </Box>
        </Box>

        <Typography 
          sx={{ 
            fontSize: '14px',
            color: '#1D2226',
            opacity: 0.8,
            lineHeight: 1.6
          }}
        >
          Lorem ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileScreen; 