import React, { FC, useState } from "react";

import { Grid } from "@mui/material";

import MDBox from "components/MDBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { EditDatasetView } from "./EditDatasetView";
import { EditMeasureView } from "./EditMeasureView";
import { EditTaskView } from "./EditTaskView";

export const Dashboard: FC = () => (
  <DashboardLayout>
    <DashboardNavbar />
    <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EditMeasureView />
        </Grid>
        <Grid item xs={12}>
          <EditDatasetView />
        </Grid>
        <Grid item xs={12}>
          <EditTaskView />
        </Grid>
      </Grid>
    </MDBox>
  </DashboardLayout>
);
