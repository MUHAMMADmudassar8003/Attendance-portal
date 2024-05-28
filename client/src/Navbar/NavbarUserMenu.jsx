import React from 'react';
import { Menu, MenuItem, Popover, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  arrow: {
    position: 'absolute',
    fontSize: 7,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 1em 1em 1em',
      borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
    },
  },
  popover: {
    pointerEvents: 'none',
  },
}));

const NavbarUserMenu = ({ anchorEl, onClose }) => {
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'user-menu-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      classes={{
        paper: classes.popover,
      }}
    >
      <div className={classes.arrow} />
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={onClose}
      >
        <MenuItem onClick={onClose}>Profile</MenuItem>
        <MenuItem onClick={onClose}>Logout</MenuItem>
      </Menu>
    </Popover>
  );
};

export default NavbarUserMenu;
