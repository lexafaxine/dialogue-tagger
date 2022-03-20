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
import React, { FC } from "react";
import { AssociateBy, Measure } from "store/measureSlice";
import { string } from "yup";

interface MeasureTableProps {
  measures: AssociateBy<Measure, "id">;
  onClick: (id: string) => void;
}

interface FieldSchema {
  name: string;
  render: (data: Measure) => ReturnType<FC>;
}

const fieldSchemas: FieldSchema[] = [
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

export const MeasureTable: FC<MeasureTableProps> = ({ measures, onClick }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{ display: "table-header-group" }}>
          <TableRow>
            {fieldSchemas.map(({ name }) => (
              <TableCell align="center">{name}</TableCell>
            ))}
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(measures).map(([id, row], i) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {fieldSchemas.map(({ render }) => (
                <TableCell align="center">{render(row)}</TableCell>
              ))}
              <TableCell align="center">
                <Button onClick={() => onClick(id)}>edit</Button>
                <Button>delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
