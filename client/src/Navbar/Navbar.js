import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import images from "./images.jpg"; // Import the image file

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Use the imported image */}
        <img src={images} alt="Images" style={{ marginRight: '10px', width: '40px', height: '40px' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
