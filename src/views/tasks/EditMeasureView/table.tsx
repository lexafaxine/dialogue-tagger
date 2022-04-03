import React, { FC } from "react";

import TableCell from "@mui/material/TableCell";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { Measure } from "model";

const schema: FieldSchema<Measure>[] = [
  {
    name: "Id",
    render: (m) => <TableCell>{m.id}</TableCell>,
  },
  {
    name: "Title",
    render: (m) => <TableCell>{m.title}</TableCell>,
  },
];

// eslint-disable-next-line max-len
export const WrappedDataTable: FC<Omit<DataTableProps<Measure>, "schema">> = (props) => <DataTable {...props} schema={schema} />;
