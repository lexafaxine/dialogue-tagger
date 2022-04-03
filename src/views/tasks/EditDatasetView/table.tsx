import React, { FC } from "react";

import TableCell from "@mui/material/TableCell";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { Dataset } from "models";

const schema: FieldSchema<Dataset>[] = [
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
export const WrappedDataTable: FC<Omit<DataTableProps<Dataset>, "schema">> = (props) => <DataTable {...props} schema={schema} />;
