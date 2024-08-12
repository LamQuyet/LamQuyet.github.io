// pages/index.js

import Layout from "../components/Layout";
import Header from "../components/Header";
import Section from "../components/Section";
import { Box, Container, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Section title="Education">
        <Grid2 container>
          <Grid2 xs={3}>
            <Typography fontWeight={"400"} fontSize={13}>
              08/2017 - 06/2022
            </Typography>
          </Grid2>
          <Grid2 xs={9}>
            <Stack>
              <Typography fontWeight={"600"} fontSize={13}>
                Thai Nguyen University Of Information And Communication
                Technology
              </Typography>
              <Typography fontWeight={"400"} fontSize={13}>
                Software Engineering
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </Section>
      <Section title="Career Objective">
        <Stack spacing={1}>
          <Grid2 container>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Short-term goal:
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Typography fontWeight={"400"} fontSize={13}>
                Learn more about web, and mobile native. Improve proficiency in
                using React Native. Apply existing knowledge in my work and
                learn more about technology and problem-solving in the
                workplace.
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Long-term goal:
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Typography fontWeight={"400"} fontSize={13}>
                I want to become a specialized mobile developer.
              </Typography>
            </Grid2>
          </Grid2>
        </Stack>
      </Section>
      <Section title="Kinh nghiệm làm việc">
        <Stack spacing={2}>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={13}>
                09/2023 - Hiện tại
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={13}>
                  ETC Technology System JSC
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Lập trình viên mobile + website
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Tham gia phát triển ứng dụng quản lý nội bộ, nghiên cứu và
                  phát triển các dự án bằng các công nghệ mới
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={13}>
                02/2023 - 08/2023
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={13}>
                  SanboxVN
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Lập trình viên React Native
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Tham gia phát triển và bảo trì các ứng dụng cung cấp nền tảng
                  bán hàng online, ứng dụng quản lý cư dân- trạng thái bất động
                  sản cho Ecopark
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>

          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={13}>
                07/2022 - 01/2023
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={13}>
                  905 VN
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Lập trình viên React Native
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Tham gia phát triển các ứng dụng cung cấp dịch vụ y tế.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>

          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"400"} fontSize={13}>
                07/2021 - 07/2022
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack spacing={0.5}>
                <Typography fontWeight={"600"} fontSize={13}>
                  Caerux Lab
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Lập trình viên React Native
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Nghiên cứu về công nghệ WebRTC, SocketIO Tham gia phát triển
                  các dự án về ứng dụng download các sticker cho thị trường Nhật
                  Bản. Xây dựng và phát triển ứng dụng Matching.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </Section>

      <Section title="Các kĩ năng">
        <Stack spacing={2}>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Mobile
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={13}>
                  React Native, React Hook, Custom hook
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  ES6, TypeScript
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Redux
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  WebRTC
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  SocketIO
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Restful API, HTTP
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  In-app purchase.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Firebase, Notification, auth...
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Website
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Typography fontWeight={"400"} fontSize={13}>
                ReactJS, NextJS, Material UI
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Database
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={13}>
                  Have basic knowledge of SQL Server, MySQL, XML, MongoDB,
                  Postgres
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Experience writing APIs using Express
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container borderBottom={1} borderColor={"#eee"} pb={2}>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Soft skills
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={13}>
                  Ability to learn and take initiative in work, as well as work
                  well in a team as well as independently.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Basic English
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
          <Grid2 container>
            <Grid2 xs={3}>
              <Typography fontWeight={"600"} fontSize={13}>
                Other
              </Typography>
            </Grid2>
            <Grid2 xs={9}>
              <Stack>
                <Typography fontWeight={"400"} fontSize={13}>
                  I used Express to code API for graduation project.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  I can work with Git, Source Tree tool.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  I can work with Figma.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  Have an understanding of OOP, Java, Kotlin.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  I can use the manager work tools: Redmide, Base, TFS.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  I have basic knowledge of Android XML and am learning Android
                  Jetpack Compose.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  I am experienced in working with Scrum/Agile processes.
                </Typography>
                <Typography fontWeight={"400"} fontSize={13}>
                  I am always ready to learn any technology.
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </Section>
      <Section title="Dự án">
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
