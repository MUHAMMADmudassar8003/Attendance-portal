import React from "react";
import Button from "@mui/material/Button";

const NavbarButton = ({ page, onClick }) => {
  return (
    <Button onClick={onClick} sx={{ my: 2, color: "white", display: "block" }}>
      {page}
    </Button>
  );
};

export default NavbarButton;
