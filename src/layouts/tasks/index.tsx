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
import { MeasureModal } from "./EditMissionModal";

const MDBox = MDBox_ as FC<PropsWithChildren<any>>;
const MDTypography = MDTypography_ as FC<PropsWithChildren<any>>;



// const MeasureListTable: FC<any> = () => {


//   const columns = [
//     { Header: "title", accessor: "title", width: "45%", align: "left" },
//     { Header: "description", accessor: "description", align: "left" },
//     { Header: "type", accessor: "type", align: "center" },
//     { Header: "tags", accessor: "tags", align: "center" },
//     { Header: "action", accessor: "action", align: "center" },
//   ];

//   const measure_rows: Array<Measure> = [];

//   const measureListState = useSelector((state: AppState) => state.measureList);

//   useEffect(() => {

//     if (measureListState.measures) {
//       const measureList = measureListState.measures;

//       const measure_rows = measureList.map((measure) => {
//         return (
//           {
//             title: (
//               <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//                 {measure.title}
//               </MDTypography>
//             ),
//             description: (
//               <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//                 {measure.description}
//               </MDTypography>
//             ),
//             type: (
//               <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//                 {measure.type}
//               </MDTypography>
//             ),
//             tags: (
//               <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//                 {measure.tags}
//               </MDTypography>
//             ),
//             action: (
//               <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
//                 "Delete"
//               </MDTypography>
//             )
//           }
//         )
//       });

//     };

//   }, [measureListState]);

//   return (
//     <Grid item xs={6}>
//       <Card>
//         <MDBox
//           mx={2}
//           mt={-3}
//           py={3}
//           px={2}
//           variant="gradient"
//           bgColor="info"
//           borderRadius="lg"
//           coloredShadow="info"
//         >
//           <MDTypography variant="h6" color="white">
//             Measures
//           </MDTypography>
//         </MDBox>
//         <MDBox pt={3}>
//           <DataTable
//             table={{ columns, measure_rows }}
//             isSorted={false}
//             entriesPerPage={false}
//             showTotalEntries={false}
//             noEndBorder
//           />
//         </MDBox>
//       </Card>
//     </Grid>
//   )
// };

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

export default function BasicTable() {
  return (
    <Grid item xs={6}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ display: "table-header-group" }}>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></Grid>
  );
}




export const Dashboard: FC<any> = () => {

  return (
    <DashboardLayout>
      <DashboardNavbar></DashboardNavbar>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <BasicTable></BasicTable>
            <MeasureModal></MeasureModal>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  )
};