'use client'
import React from "react";
import Container from "@mui/material/Container";
import { Spacing } from "@/utils";

const Layout = ({ children }: any) => {
  const spacing = Spacing(10);
  return (
    <Container
      maxWidth="md"
      style={{
        background: "white",
        padding: `${spacing}mm`,
        margin: `${spacing}mm auto`,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
