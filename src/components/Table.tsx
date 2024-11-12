"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { ProjectType } from "@/type";
import { FontSize, Spacing } from "@/utils";

export default function TableComponent({ data }: any) {
  return (
    <>
      <Stack>
        {data.map((row: ProjectType) => (
          <Stack key={row.project_name} pb={4}>
            <Stack spacing={0.5} pb={1}>
              <Typography fontWeight={"600"} fontSize={FontSize(16)}>
                {row.project_name}
              </Typography>
              <Typography fontWeight={"400"} fontSize={FontSize(13)}>
                {`(${row.time_period})`}
              </Typography>
            </Stack>
            <TableContainer component={Paper}>
              <Table sx={{ tableLayout: "auto" }} aria-label="simple table">
                <TableBody>
                  {row.detail.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          borderRightWidth: 1,
                          fontWeight: "bold",
                          fontSize: FontSize(13),
                          paddingInline: Spacing(2),
                        }}
                        align="left"
                        width={"20%"}
                      >
                        {item?.row_name}
                      </TableCell>
                      <TableCell
                        width={"80%"}
                        align="left"
                        sx={{
                          fontSize: FontSize(13),
                          paddingInline: Spacing(2),
                        }}
                      >
                        {item?.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
