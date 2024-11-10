import Grid2 from "@mui/material/Unstable_Grid2"
import Section from "./Section"
import { Stack, Typography } from "@mui/material"
import { FontSize } from "@/utils"

const Career = () => {
    return (
        <Section title="Career Objective">
        <Stack spacing={1}>
          <Grid2 container>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Short-term goal:
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                Learn more about web, and mobile native. Improve proficiency in
                using React Native. Apply existing knowledge in my work and
                learn more about technology and problem-solving in the
                workplace.
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Long-term goal:
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                I want to become a specialized mobile developer.
              </Typography>
            </Grid2>
          </Grid2>
        </Stack>
      </Section>
    )
}
export default Career