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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid #ddd",
}));

export default function TableComponent({ data }: any) {
  return (
    <>
      <Stack>
        {data.map((row: ProjectType) => (
          <>
            <Typography fontWeight={"600"} fontSize={16}>
              {row.project_name}
            </Typography>
            <Typography fontWeight={"400"} fontSize={13}>
              10/2023 - Current
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  <TableRow
                    key={row.project_name}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                        fontWeight: "900",
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.customer_name}
                    </TableCell>
                    <TableCell align="right">{row.customer_name}</TableCell>
                    <TableCell align="right">{row.customer_name}</TableCell>
                    <TableCell align="right">{row.customer_name}</TableCell>
                    <TableCell align="right">{row.customer_name}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ))}
        ;
      </Stack>
    </>
  );
}
