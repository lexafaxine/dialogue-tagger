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
    // return (
    //   <DialoguePreview dialogues={datasets[id].dialogues}></DialoguePreview>
    // )
  }

  return (
    <Grid item xs={12}>
      <DatasetTable measures={datasets} onClick={onClickDataset}></DatasetTable>
    </Grid>
  )
}