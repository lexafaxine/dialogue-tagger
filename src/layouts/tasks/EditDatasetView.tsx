// @mui material components
import Grid from "@mui/material/Grid";

// Data
import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import { useDatasets } from "hooks/useDatasets";
import { DatasetTable } from "./DatasetTable";

export const EditDatasetView: FC = ({}) => {

  const {datasets, updateDatasets} = useDatasets();

  const onClickDataset = (id: string) => {
    console.log(datasets[id].dialogues)
  }

  return (
    <Grid item xs={12}>
      <DatasetTable source={datasets} onClick={onClickDataset}></DatasetTable>
    </Grid>
  )
}