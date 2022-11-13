import React, { Component } from "react";

import style from "./Dashboard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserAuth } from "../../context/AuthContext";
import {
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Paper,
  TableRow,
  TableBody,
} from "@mui/material";

const Dashboard = () => {
  const router = useRouter();
  const { handleGoogleSignIn, logout, user } = UserAuth();
  // if (!user?.displayName) {
  //   router.replace("/");
  // }
  return (
    <>
      {user?.displayName && (
        <div className={style.container1}>
          <div className={`${style.row}  ${style.row1} `}>
            <div className={style.col} style={{ flexBasis: "100%" }}>
              <div className={style.imgBox}>
                <Image
                  className={style.imgBox}
                  src={user.photoURL}
                  width="300"
                  height="300"
                  alt="amanGupta"
                />
              </div>
              <div>
                <h1 className={style.userName}>{user.displayName}</h1>
                <p style={{ fontSize: "1.5rem" }}>{user.email}</p>
              </div>

              <div className={style.row4}>
                <h1 className={style.data}>REFERAL CODE:</h1>
                <h1 className={style.data} style={{ color: "#c084fc" }}>
                  {"abcd1234"}
                </h1>
              </div>
            </div>
          </div>
          <div className={`${style.row}  ${style.row2} `}>
            <div className={`${style.col}  ${style.col2} `}>
              <h1 className={style.heading}>Leaderboard</h1>
              <div>
                <DenseTable />
              </div>
            </div>
            <div className={`${style.col}  ${style.col2} `}>
              <h1 className={style.heading}>
                Registrations: <span style={{ color: "#c084fc" }}>{21}</span>
              </h1>
              <div>
                <DenseTable />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function createData(rank, name, email) {
  return { rank, name, email };
}

const rows = [
  createData(1, "Ndhab dbhavbhjda", "BSdhva@gmail.com"),
  createData(2, "Ndhab dbhavbhjda", "BSdhva@gmail.com"),
  createData(3, "Ndhab dbhavbhjda", "BSdhva@gmail.com"),
];

function DenseTable() {
  return (
    <Paper sx={{ width: "95%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Dashboard;
