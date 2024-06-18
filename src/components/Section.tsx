// components/Section.js

import React from "react";
import { Typography } from "@mui/material";

const Section = ({ title, children }: any) => {
  return (
    <section style={{ marginBottom: "15mm", color: "black" }}>
      <Typography
        variant="h2"
        component="h2"
        style={{
          borderBottom: "2px solid #000",
          paddingBottom: "0.5em",
          marginBottom: "1em",
        }}
      >
        {title}
      </Typography>
      {children}
    </section>
  );
};

export default Section;
