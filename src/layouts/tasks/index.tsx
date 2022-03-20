import { Grid } from "@mui/material";
import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { FC, useState } from "react";
import { EditMeasureView } from "./EditMeasureView";

export const Dashboard: FC = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar></DashboardNavbar>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <EditMeasureView />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
};
