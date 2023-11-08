import React from 'react';
import { Box } from '@mui/material';
import UserInfo from './UserInfo';
import UserPreferences from './UserPreferences';

const Profile = () => {
  const columnStyle = {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center', // Centrar horizontalmente
  };

  return (
    <Box display="flex" width="80%" height="80vh" justifyContent="space-around" className="profile-container">
      <Box className="column" style={columnStyle}>
        <UserInfo />
      </Box>
      <Box className="column" style={columnStyle}>
        <UserPreferences />
      </Box>
    </Box>
  );
};

export default Profile;





