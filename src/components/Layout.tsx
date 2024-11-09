'use client'
import React from "react";
import Container from "@mui/material/Container";
import { useGetSpacing } from "@/utils";

const Layout = ({ children }: any) => {
  const padding = useGetSpacing(20);
  const margin = useGetSpacing(20);
  return (
    <Container
      maxWidth="md"
      style={{
        // width: "210mm",
        background: "white",
        padding: `${padding}mm`,
        margin: `${margin}mm auto`,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </Container>
  );
};

export default Layout;
