"use client";
import { project } from "@/data/data";
import Section from "./Section";
import TableComponent from "./Table";

const Project = () => {
  return (
    <Section title="Project">
      <TableComponent data={project} />
    </Section>
  );
};
export default Project;
