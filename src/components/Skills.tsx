import { Stack, Typography } from "@mui/material"
import Section from "./Section"
import Grid2 from "@mui/material/Unstable_Grid2"
import { FontSize } from "@/utils"

const Skills = () => {
    return(
        <Section title="Skills">
        <Stack spacing={2}>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Mobile
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  React Native, React Hook, Custom hook
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  ES6, TypeScript
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Redux
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  WebRTC
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  SocketIO
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Restful API, HTTP
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  In-app purchase.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Firebase, Notification, auth...
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Website
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                ReactJS, NextJS, Material UI
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Database
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Have basic knowledge of SQL Server, MySQL, XML, MongoDB,
                  Postgres
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Experience writing APIs using Express
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Soft skills
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Ability to learn and take initiative in work, as well as work
                  well in a team as well as independently.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Basic English
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={FontSize(13)}>
                Other
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I used Express to code API for graduation project.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I can work with Git, Source Tree tool.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I can work with Figma.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  Have an understanding of OOP, Java, Kotlin.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I can use the manager work tools: Redmide, Base, TFS.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I have basic knowledge of Android XML and am learning Android
                  Jetpack Compose.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I am experienced in working with Scrum/Agile processes.
                </Typography>
                <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                  I am always ready to learn any technology.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </Section>
    )
}
export default Skills