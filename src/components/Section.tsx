// components/Section.js

import React from "react";
import { Typography } from "@mui/material";

const Section = ({ title, children }: any) => {
  return (
    <section style={{ marginBottom: "15mm", color: "black" }}>
      <Typography
        sx={{
          borderBottom: "1px solid #000",
          marginBottom: "1em",
          fontWeight: "600",
        }}
      >
        {title.toUpperCase()}
      </Typography>
      {children}
    </section>
  );
};

export default Section;
