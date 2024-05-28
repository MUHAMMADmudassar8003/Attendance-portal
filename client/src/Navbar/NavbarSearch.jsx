import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const NavbarSearch = () => {
  return (
    <TextField
      id="search-bar"
      label="Search"
      size="small"
      variant="standard"
      sx={{
        "& .MuiInputBase-root": {
          backgroundColor: "transparent",
          borderRadius: "20px",
        },
        "& .MuiInputLabel-root": {
          paddingLeft: "10px", // Add left padding to the label
        },
        "& .MuiInputBase-input": {
          paddingLeft: "10px", // Add left padding to the input
          paddingTop: "10px", // Adjust padding as needed
          paddingBottom: "10px", // Adjust padding as needed
        },
      }}
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
    />
  );
};

export default NavbarSearch;
