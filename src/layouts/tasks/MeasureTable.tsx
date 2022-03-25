import {
  Chip,
} from "@mui/material";
import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import React, { FC } from "react";
import { Measure } from "store/measureSlice";


const fieldSchemas: FieldSchema<Measure>[] = [
  {
    name: "Title",
    render: ({ title }: Measure) => <>{title}</>,
  },
  {
    name: "Description",
    render: ({ description }: Measure) => <>{description}</>,
  },
  {
    name: "Scale",
    render: ({ type }: Measure) => <>{type}</>,
  },
  {
    name: "Tags",
    render: ({ tags }: Measure) => {
      return (
        <>
          {tags[0].map((t) => (
            <div>
              <Chip label={t} />
            </div>
          ))}
        </>
      );
    },
  },
];


export const MeasureTable: FC<Omit<DataTableProps<Measure>, "fieldSchemas">> = (props) => (
  <DataTable {...props} fieldSchemas={fieldSchemas} />
)
