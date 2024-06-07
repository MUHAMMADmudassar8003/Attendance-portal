// src/UserProfilePopup.js

import React from 'react';
import { Box, Paper, Typography, Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UserProfilePopup = ({ onClose }) => {
    // Dummy user data
    const userData = {
        image: 'https://via.placeholder.com/150', // Placeholder image URL
        name: 'John Doe',
        id: '12345',
        email: 'john.doe@example.com',
        contact: '+1234567890',
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1300,
            }}
        >
            <Paper
                sx={{
                    padding: 3,
                    width: '300px',
                    textAlign: 'center',
                    backgroundColor: 'white',
                    position: 'relative',
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Avatar
                    src={userData.image}
                    alt={userData.name}
                    sx={{ width: 100, height: 100, margin: '0 auto' }}
                />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {userData.name}
                </Typography>
                <Typography variant="body1">ID: {userData.id}</Typography>
                <Typography variant="body1">Email: {userData.email}</Typography>
                <Typography variant="body1">Contact #: {userData.contact}</Typography>
            </Paper>
        </Box>
    );
};

export default UserProfilePopup;
