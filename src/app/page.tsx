'use client'

import Layout from "../components/Layout";
import Header from "../components/Header";
import Section from "../components/Section";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TableComponent from "@/components/Table";
import { FontSize } from "@/utils";
import Education from "@/components/Education";
import Career from "@/components/Career";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Hobby from "@/components/Hobby";
import Project from "@/components/Project";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Education/>
      <Career/>
      <Experience/>
      <Skills/>
      <Project/>
      <Hobby/>
    </Layout>
  );
};

export default HomePage;
