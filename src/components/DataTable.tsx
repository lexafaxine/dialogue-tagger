import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { FC } from "react";
import { AssociateBy } from "utilities";

export interface FieldSchema<T> {
  name: string;
  render: (data: T) => ReturnType<FC>;
}


export interface DataTableProps<T extends Record<string, any>> {
  source: AssociateBy<T, "id">;
  onClick: (id: string) => void;
  fieldSchemas: FieldSchema<T>[];
}


export function DataTable<T>({ source, onClick, fieldSchemas }: DataTableProps<T>) {
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
          {Object.entries(source).map(([id, row], i) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {fieldSchemas.map(({ render }) => (
                <TableCell align="center">{render(row as T)}</TableCell>
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
