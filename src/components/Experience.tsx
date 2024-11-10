import { FontSize } from "@/utils"
import { Stack, Typography } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2"
import Section from "./Section"

const Experience = () => {
    return(
        <Section title="Work experience">
        <Stack spacing={2}>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                09/2023 - Current
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                  ETC Technology System JSC
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Developer
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Maintain ERP application with React Native Join code Website
                  with Nextjs framework + Materia UI. <br />
                  Learn and update new technologies about mobile and website
                  like Vue, Nextjs, Android Jetpack Compose, Flutter...
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                02/2023 - 08/2023
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                  SanboxVN
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  React Native developer
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Participate in developing and maintaining applications that
                  provide online sales platforms, resident management
                  applications, and real estate status for Ecopark.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>

          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                07/2022 - 01/2023
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                  905 VN
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  React Native developer
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Participate in developing applications that provide healthcare
                  services.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>

          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                07/2021 - 07/2022
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                  Caerux Lab
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  React Native developer
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Research on WebRTC and SocketIO technologies. <br />
                  Participate in developing projects related to sticker
                  downloading applications for the Japanese market. <br />
                  Build and develop matching applications.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </Section>
    )
}

export default Experience