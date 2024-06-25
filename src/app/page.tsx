// pages/index.js

import Layout from "../components/Layout";
import Header from "../components/Header";
import Section from "../components/Section";
import { Box, Container, Stack, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <Section title="Học vấn">
        <Stack direction="row" spacing={5}>
          <Typography fontWeight={"400"} fontSize={14} maxWidth={"30%"}>
            08/2017 - 06/2022
          </Typography>
          <Stack maxWidth={"70%"}>
            <Typography fontWeight={"600"} fontSize={14}>
              Đại học Công nghệ Thông tin và Truyền thông Thái Nguyên
            </Typography>
            <Typography fontWeight={"400"} fontSize={14}>
              Chuyên ngành: Công nghệ Thông tin định hướng Kĩ thuật phần mềm
            </Typography>
          </Stack>
        </Stack>
      </Section>
      <Section title="Mục tiêu nghề nghiệp">
        <Stack spacing={1}>
          <Typography fontWeight={"400"} fontSize={14}>
            <b>Mục tiêu ngắn hạn:</b> Học hỏi thêm các kiến thức về web, mobile
            native, BE. Nâng cao khả năng sử dụng React Native. Được áp dụng các
            kiến thức mình đã có vào trong công việc cũng như học hỏi được thêm
            các kiến thức khác về công nghệ, cách giải quyết các vấn đề trong
            công việc..
          </Typography>
          <Typography fontWeight={"400"} fontSize={14}>
            <b>Mục tiêu dài hạn:</b> Học hỏi được nhiều kiến thức để có thể phát
            triển bản thân lên theo hướng Tech Lead.
          </Typography>
        </Stack>
      </Section>
      <Section title="Kinh nghiệm làm việc">
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={5}
            borderBottom={1}
            borderColor={"#eee"}
            pb={2}
          >
            <Typography fontWeight={"400"} fontSize={14} maxWidth={"30%"}>
              09/2023 - Hiện tại
            </Typography>
            <Stack maxWidth={"70%"} spacing={0.5}>
              <Typography fontWeight={"600"} fontSize={14}>
                ETC Technology System JSC
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Lập trình viên mobile + website
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Tham gia phát triển ứng dụng quản lý nội bộ, nghiên cứu và phát
                triển các dự án bằng các công nghệ mới
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={5}
            borderBottom={1}
            borderColor={"#eee"}
            pb={2}
          >
            <Typography fontWeight={"400"} fontSize={14} maxWidth={"30%"}>
              02/2023 - 08/2023
            </Typography>
            <Stack maxWidth={"70%"} spacing={0.5}>
              <Typography fontWeight={"600"} fontSize={14}>
                SanboxVN
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Lập trình viên React Native
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Tham gia phát triển và bảo trì các ứng dụng cung cấp nền tảng
                bán hàng online, ứng dụng quản lý cư dân- trạng thái bất động
                sản cho Ecopark
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={5}
            borderBottom={1}
            borderColor={"#eee"}
            pb={2}
          >
            <Typography fontWeight={"400"} fontSize={14} maxWidth={"30%"}>
              07/2022 - 01/2023
            </Typography>
            <Stack maxWidth={"70%"} spacing={0.5}>
              <Typography fontWeight={"600"} fontSize={14}>
                905 VN
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Lập trình viên React Native
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Tham gia phát triển các ứng dụng cung cấp dịch vụ y tế.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={5}
            borderBottom={1}
            borderColor={"#eee"}
            pb={2}
          >
            <Typography fontWeight={"400"} fontSize={14} maxWidth={"30%"}>
              07/2021 - 07/2022
            </Typography>
            <Stack maxWidth={"70%"} spacing={0.5}>
              <Typography fontWeight={"600"} fontSize={14}>
                Caerux Lab
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Lập trình viên React Native
              </Typography>
              <Typography fontWeight={"400"} fontSize={14}>
                Nghiên cứu về công nghệ WebRTC, SocketIO Tham gia phát triển các
                dự án về ứng dụng download các sticker cho thị trường Nhật Bản.
                Xây dựng và phát triển ứng dụng Matching.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Section>

      <Section title="Các kĩ năng">
        <Typography variant="body1" component="p">
          Skill 1, Skill 2, Skill 3, ...
        </Typography>
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
