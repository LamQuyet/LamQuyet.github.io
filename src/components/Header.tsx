"use client";

import React from "react";
import { Avatar, Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {useGetFontSize, useGetSpacing} from "@/utils";

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
            width: useGetSpacing(150),
            height: useGetSpacing(200),
            maxWidth: "100%",
            maxHeight: 200,
          }}
        />
        <Stack direction="column" spacing={1} flex={1}>
          <Typography variant="h4" sx={{ fontSize: useGetFontSize(32) }}>
            Lâm Văn Quyết
          </Typography>
          <Typography variant="h6" sx={{ fontSize: useGetFontSize(20) }}>
            React Native developer
          </Typography>
          <Stack>
            <Grid2 container>
              <Grid2 xs={3}>
                <Typography fontWeight="700" fontSize={useGetFontSize(13)}>
                  Date of birth:
                </Typography>
              </Grid2>
              <Grid2 xs={9}>
                <Typography fontWeight="400" fontSize={useGetFontSize(13)}>
                  16/01/1998
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container>
              <Grid2 xs={3}>
                <Typography fontWeight="700" fontSize={useGetFontSize(13)}>
                  Gender:
                </Typography>
              </Grid2>
              <Grid2 xs={9}>
                <Typography fontWeight="400" fontSize={useGetFontSize(13)}>
                  Male
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container>
              <Grid2 xs={3}>
                <Typography fontWeight="700" fontSize={useGetFontSize(13)}>
                  Phone:
                </Typography>
              </Grid2>
              <Grid2 xs={9}>
                <Typography fontWeight="400" fontSize={useGetFontSize(13)}>
                  0376105680
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container>
              <Grid2 xs={3}>
                <Typography fontWeight="700" fontSize={useGetFontSize(13)}>
                  Email:
                </Typography>
              </Grid2>
              <Grid2 xs={9}>
                <Typography fontWeight="400" fontSize={useGetFontSize(13)}>
                  lamquyet.job@gmail.com
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container>
              <Grid2 xs={3}>
                <Typography fontWeight="700" fontSize={useGetFontSize(13)}>
                  Address:
                </Typography>
              </Grid2>
              <Grid2 xs={9}>
                <Typography fontWeight="400" fontSize={useGetFontSize(13)}>
                  Kiên Lao - Lục Ngạn - Bắc Giang
                </Typography>
              </Grid2>
            </Grid2>
            <Grid2 container>
              <Grid2 xs={3}>
                <Typography fontWeight="700" fontSize={useGetFontSize(13)}>
                  Website:
                </Typography>
              </Grid2>
              <Grid2 xs={9}>
                <Typography fontWeight="400" fontSize={useGetFontSize(13)}>
                  https://www.facebook.com/lamquyet9x/
                </Typography>
              </Grid2>
            </Grid2>
          </Stack>
        </Stack>
      </Stack>
    </header>
  );
};

export default Header;