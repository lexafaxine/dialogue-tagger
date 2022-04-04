import React, { FC } from "react";

import { TableCell } from "@mui/material";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { TaskDefinition } from "models";

const schema: FieldSchema<TaskDefinition>[] = [
  {
    name: "Id",
    render: (d) => <TableCell>{d.id}</TableCell>,
  },
  {
    name: "Title",
    render: (d) => <TableCell>{d.title}</TableCell>,
  },
  {
    name: "Description",
    render: (task) => <TableCell>{task.description}</TableCell>,
  },
  {
    name: "Measures",
    render: (d) => <TableCell>{d.measureIds.join(",")}</TableCell>,
  },
  {
    name: "Dataset",
    render: (d) => <TableCell>{d.datasetId}</TableCell>,
  },
  {
    name: "Progress",
    render: () => <TableCell>{0}</TableCell>,
  },
];

// eslint-disable-next-line max-len
export const WrappedDataTable: FC<Omit<DataTableProps<TaskDefinition>, "schema">> = (props) => <DataTable {...props} schema={schema} />;
