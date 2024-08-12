// components/Layout.js

import React from "react";
import Container from "@mui/material/Container";

const Layout = ({ children }: any) => {
  return (
    <Container
      maxWidth="md"
      style={{
        background: "white",
        padding: "20mm",
        margin: "20mm auto",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
