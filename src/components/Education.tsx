import Grid2 from "@mui/material/Unstable_Grid2";
import Section from "./Section";
import { Stack, Typography } from "@mui/material";
import { FontSize } from "@/utils";

const Education = () => {
  return (
    <Section title="Education">
      <Grid2 container>
        <Grid2 xs={3}>
          <Typography fontWeight={"400"} fontSize={FontSize(13)}>
            08/2017 - 06/2022
          </Typography>
        </Grid2>
        <Grid2 xs={9}>
          <Stack>
            <Typography fontWeight={"600"} fontSize={FontSize(13)}>
              Thai Nguyen University Of Information And Communication Technology
            </Typography>
            <Typography fontWeight={"400"} fontSize={FontSize(13)}>
              Software Engineering
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
    </Section>
  );
};

export default Education;
