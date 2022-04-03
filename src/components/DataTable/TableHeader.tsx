import React from "react";

import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";

import { FieldSchema } from "components/DataTable";
import { Idable } from "utilities";

interface EnhancedTableHeadProps<T> {
  schema: FieldSchema<T>[];
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

export function EnhancedTableHead<T extends Idable>(props: EnhancedTableHeadProps<T>) {
  const {
    onSelectAllClick, numSelected, rowCount, schema,
  } = props;

  // const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
  //   onRequestSort(event, property);
  // };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {schema.map(({ name }, i) => (
          <TableCell
            key={name}
            align="left"
            padding="normal"
            sortDirection={false}
          >
            {name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
