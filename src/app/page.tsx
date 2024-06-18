// pages/index.js

import Layout from "../components/Layout";
import Header from "../components/Header";
import Section from "../components/Section";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Section title="Experience">
        <Typography variant="body1" component="p">
          Job 1: Description of your role and achievements.
        </Typography>
        <Typography variant="body1" component="p">
          Job 2: Description of your role and achievements.
        </Typography>
      </Section>
      <Section title="Education">
        <Typography variant="body1" component="p">
          Degree: Institution, Year.
        </Typography>
      </Section>
      <Section title="Skills">
        <Typography variant="body1" component="p">
          Skill 1, Skill 2, Skill 3, ...
        </Typography>
      </Section>
      <Section title="Projects">
        <Typography variant="body1" component="p">
          Project 1: Description and link.
        </Typography>
        <Typography variant="body1" component="p">
          Project 2: Description and link.
        </Typography>
      </Section>
      <Section title="Contact">
        <Typography variant="body1" component="p">
          Email: youremail@example.com
        </Typography>
        <Typography variant="body1" component="p">
          Phone: (123) 456-7890
        </Typography>
      </Section>
    </Layout>
  );
};

export default HomePage;
