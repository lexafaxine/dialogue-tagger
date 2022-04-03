// @mui material components
import React, { FC, useState } from "react";

// Data
import { Button, TableCell } from "@mui/material";
import Grid from "@mui/material/Grid";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { useDatasets } from "hooks/useDatasets";
import { Dataset } from "model";

const schema: FieldSchema<Dataset>[] = [
  {
    name: "Id",
    render: ({ id }) => <TableCell>{id}</TableCell>,
  },
  {
    name: "Title",
    render: ({ title }) => <TableCell>{title}</TableCell>,
  },
  {
    name: "Description",
    render: ({ description }) => <TableCell>{description}</TableCell>,
  },
];

const WrappedDataTable: FC<Omit<DataTableProps<Dataset>, "schema">> = (props) => <DataTable {...props} schema={schema} />;

export const EditDatasetView: FC = ({}) => {
  const { datasets, updateDatasets } = useDatasets();

  const onClickDataset = (id: string) => {
    console.log(datasets[id].dialogues);
  };

  return (
    <Grid item xs={12}>
      <WrappedDataTable title="Dataset" source={datasets} onRowClick={onClickDataset} />
    </Grid>
  );
};
