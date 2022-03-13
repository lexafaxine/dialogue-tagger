/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox_ from "components/MDBox";
import MDTypography_ from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store/Appstate";
import React from "react";
import { Measure } from "store/MeasureListReducer";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { MeasureModal } from "./MeasureModal";

const MDBox = MDBox_ as FC<PropsWithChildren<any>>;
const MDTypography = MDTypography_ as FC<PropsWithChildren<any>>;

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const useMeasureList = () => {
  
  const [measureList, setMeasureList] = useState<Array<Measure>>([]);

  const measureListState = useSelector((state: AppState) => state.measureList);

  useEffect( () => {
    
    setMeasureList(measureListState.measures);

  }, [measureListState]);

  return measureList;

}

export const MeasureTable = () => {

  const measureList = useMeasureList();

  return (
    <Grid item xs={6}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ display: "table-header-group" }}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Scale</TableCell>
              <TableCell align="right">Tags</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {measureList.map(({ title, description, type, tags}) => (
              <TableRow
                key={title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {title}
                </TableCell>
                <TableCell align="right">{description}</TableCell>
                <TableCell align="right">{type}</TableCell>
                <TableCell align="right">{tags}</TableCell>
                <TableCell align="right">delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></Grid>
  )
}


export const Dashboard: FC<any> = () => {

  return (
    <DashboardLayout>
      <DashboardNavbar></DashboardNavbar>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <MeasureTable></MeasureTable>
            <MeasureModal></MeasureModal>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  )
};