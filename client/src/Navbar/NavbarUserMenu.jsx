import React from 'react';
import { Menu, MenuItem } from '@material-ui/core';

const NavbarUserMenu = ({ anchorEl, onClose }) => {
  return (
    <Menu
      id="user-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      <MenuItem onClick={onClose}>Profile</MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Menu>
  );
};

export default NavbarUserMenu;
