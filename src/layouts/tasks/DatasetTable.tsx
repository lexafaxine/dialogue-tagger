import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Badge,
  Chip,
} from "@mui/material";
import { FieldSchema, DataTableProps, DataTable } from "components/DataTable";
import React, { FC } from "react";
import { Dataset, Dialogue } from "store/datasetSlice";
import { AssociateBy } from "store/measureSlice";

const fieldSchemas: FieldSchema<Dataset>[] = [
  {
    name: "Title",
    render: ({ title }: Dataset) => <>{title}</>,
  },
  {
    name: "Description",
    render: ({ description }: Dataset) => <>{description}</>,
  },
]


export const DatasetTable: FC<Omit<DataTableProps<Dataset>, "fieldSchemas">> = (props) => (
  <DataTable {...props} fieldSchemas={fieldSchemas} />
)
