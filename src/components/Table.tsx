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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid #ddd",
}));

function createData(title: string, content: string) {
  return { title, content };
}

const rows = [
  createData("Title 1", "Content for Title 1"),
  createData("Title 2", "Content for Title 2"),
  createData("Title 3", "Content for Title 3"),
  createData("Title 4", "Content for Title 4"),
  createData("Title 5", "Content for Title 5"),
];

export default function TableComponent() {
  return (
    <>
      <Stack>
        <Typography fontWeight={"600"} fontSize={16}>
          eGen, eVibe
        </Typography>
        <Typography fontWeight={"400"} fontSize={13}>
          10/2023 - Current
        </Typography>
        <TableContainer component={Paper} sx={{ overflow: "visible" }}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <StyledTableCell sx={{ width: "30%" }}>
                    {row.title}
                  </StyledTableCell>
                  <StyledTableCell sx={{ width: "70%" }}>
                    {row.content}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </>
  );
}
