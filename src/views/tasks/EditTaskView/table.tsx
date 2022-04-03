import React, { FC } from "react";

import { TableCell } from "@mui/material";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { TaskDefinition } from "model";

const schema: FieldSchema<TaskDefinition>[] = [
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
    render: () => (
      <TableCell>
        {/* {measures[task.measureIds[0]].title}... */}
        aa
      </TableCell>
    ),
  },
  {
    name: "Dataset",
    render: () => (
      <TableCell>
        {/* {measures[task.measureIds[0]].title}... */}
        aa
      </TableCell>
    ),
    // render: (task, measures, datasets) => (
    //   <TableCell>{datasets[task.datasetId].title}</TableCell>
    // ),
  },
  {
    name: "Progress",
    render: () => (
      <TableCell>
        {0}
      </TableCell>
    ),

  },
];

// eslint-disable-next-line max-len
export const WrappedDataTable: FC<Omit<DataTableProps<TaskDefinition>, "schema">> = (props) => <DataTable {...props} schema={schema} />;
