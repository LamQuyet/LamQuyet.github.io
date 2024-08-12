"use client";

import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Header = () => {
  return (
    <header
      style={{ textAlign: "start", marginBottom: "20mm", color: "black" }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          alt="avatar"
          src={"/images/avatar.jpg"}
          sx={{
            width: 150,
            height: "auto",
            aspectRatio: 3 / 4,
            maxWidth: "100%",
            maxHeight: 200,
          }}
        />
        <Stack direction="column" spacing={1}>
          <Typography variant="h4">Lâm Văn Quyết</Typography>
          <Typography variant="h6">
            Lập trình viên React Native + Nextjs
          </Typography>
          <Stack direction="row" spacing={5}>
            <Stack>
              <Typography fontWeight={"700"} fontSize={13}>
                Ngày sinh:
              </Typography>
              <Typography fontWeight={"700"} fontSize={13}>
                Giới tính:
              </Typography>
              <Typography fontWeight={"700"} fontSize={13}>
                Điện thoại:
              </Typography>
              <Typography fontWeight={"700"} fontSize={13}>
                Email:
              </Typography>
              <Typography fontWeight={"700"} fontSize={13}>
                Địa chỉ:
              </Typography>
              <Typography fontWeight={"700"} fontSize={13}>
                Website:
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight={"400"} fontSize={13}>
                16/01/1998
              </Typography>
              <Typography fontWeight={"400"} fontSize={13}>
                Nam
              </Typography>
              <Typography fontWeight={"400"} fontSize={13}>
                0376105680
              </Typography>
              <Typography fontWeight={"400"} fontSize={13}>
                lamquyet.job@gmail.com
              </Typography>
              <Typography fontWeight={"400"} fontSize={13}>
                Họ - Kiên Lao - Lục Ngạn - Bắc Giang
              </Typography>
              <Typography fontWeight={"400"} fontSize={13}>
                https://www.facebook.com/lamquyet9x/
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </header>
  );
};

export default Header;
