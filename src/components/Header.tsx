// components/Header.js

import React from "react";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <header
      style={{ textAlign: "center", marginBottom: "20mm", color: "black" }}
    >
      <Typography variant="h1" component="h1">
        Your Name
      </Typography>
      <Typography variant="h5" component="p">
        Job Title
      </Typography>
      <Typography variant="body1" component="p">
        Email: youremail@example.com
      </Typography>
      <Typography variant="body1" component="p">
        Phone: (123) 456-7890
      </Typography>
    </header>
  );
};

export default Header;
