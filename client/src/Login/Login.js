import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import logo from '../Navbar/logo.png'; // Ensure the path is correct

const LoginContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#eeeeee', // Grey 200
});

const LoginForm = styled(Paper)({
  padding: '32px',
  maxWidth: '400px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#f5f5f5', // Grey 100
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Adding a shadow for a nice effect
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  '& .MuiInputBase-input': {
    backgroundColor: '#ffffff', // White
  },
});

const StyledButton = styled(Button)({
  backgroundColor: '#ff9800', // Orange main
  color: '#ffffff', // White
  '&:hover': {
    backgroundColor: '#f57c00', // Orange dark
  },
  marginTop: '16px', // Adding space above the button
});

const MicrosoftButton = styled(Button)({
  backgroundColor: '#0078d4', // Microsoft blue
  color: '#ffffff', // White
  '&:hover': {
    backgroundColor: '#005a9e', // Darker Microsoft blue
  },
  marginTop: '16px', // Adding space above the button
});

const Logo = styled('img')({
  width: '250px', // Increased the width to 250px
  marginBottom: '32px', // Adding space below the logo
});

const LoginPage = () => {
  const [email, setEmail] = useState('chtalhaarain@gmail.com');
  const [password, setPassword] = useState('090078601');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock authentication
    if (email === 'chtalhaarain@gmail.com' && password === '090078601') {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <LoginContainer>
      <Logo src={logo} alt="Logo" />
      <LoginForm elevation={3}>
        <Typography variant="h5" component="h1" gutterBottom>
          Login
        </Typography>
        <StyledTextField
          variant="outlined"
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          variant="outlined"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton
          variant="contained"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </StyledButton>
        <MicrosoftButton
          variant="contained"
          fullWidth
          // onClick={handleMicrosoftLogin} // Placeholder for Microsoft login functionality
        >
          Login with Microsoft Account
        </MicrosoftButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default LoginPage;
