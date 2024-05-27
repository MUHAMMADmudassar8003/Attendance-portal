import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Avatar } from '@material-ui/core';
import NavbarUserMenu from './NavbarUserMenu'; // Import the DropdownMenu component
import NavbarSearch from './NavbarSearch';
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#D3D3D3',
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    cursor: 'pointer',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
     
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Your App Name
          </Typography>
          <NavbarSearch/>
          <Avatar alt="User Avatar" src="/path/to/avatar.jpg" className={classes.avatar} onClick={handleClick} />
          <NavbarUserMenu anchorEl={anchorEl} onClose={handleClose} /> {/* Use the NavbarUserMenu component */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
