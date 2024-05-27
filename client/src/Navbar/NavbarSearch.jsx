import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const NavbarSearch = () => {
  return (
    <TextField
      id="search-bar"
      label="Search"
      size="small"
      variant="outlined"
      sx={{
        backgroundColor: "white",
        borderRadius: "20px", // Adjust the border radius as needed
        "& .MuiOutlinedInput-root": {
          border: "none",
        },
        "& .MuiOutlinedInput-input": {
          padding: "10px", // Adjust the padding as needed
        },
      }}
      InputProps={{
        endAdornment: <SearchIcon />,
      }}
    />
  );
};

export default NavbarSearch;
