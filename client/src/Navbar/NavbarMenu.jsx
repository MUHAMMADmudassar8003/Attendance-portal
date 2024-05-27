import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const NavbarMenu = ({ items, onClose }) => {
  return (
    <>
      {items.map((item) => (
        <MenuItem key={item} onClick={onClose}>
          <Typography textAlign="center">{item}</Typography>
        </MenuItem>
      ))}
    </>
  );
};

export default NavbarMenu;
