import { FieldSchema, DataTableProps, DataTable } from "components/DataTable";
import { Dataset } from "model";
import React, { FC } from "react";

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
