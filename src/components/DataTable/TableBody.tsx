import React from "react";

import {
  Checkbox, TableBody, TableCell, TableRow,
} from "@mui/material";

import { FieldSchema } from "components/DataTable";
import { Idable } from "utilities";

interface EnhancedTableBodyProps<T extends Idable> {
  schema: FieldSchema<T>[];
  data: T[];
  rowSelected: Set<string>;
  handleSelected: (rowId: string) => void;
  handleRowClick: (rowId: string) => void;
}

export function EnhancedTableBody<T extends Idable>({
  data,
  schema,
  rowSelected,
  handleSelected,
  handleRowClick,
}: EnhancedTableBodyProps<T>) {
  return (
    <TableBody>
      {data.map((row, index) => {
        const isItemSelected = rowSelected.has(row.id);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow
            hover
            onClick={() => handleRowClick(row.id)}
            tabIndex={-1}
            key={row.id}
            selected={isItemSelected}
            aria-checked={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isItemSelected}
                onClick={() => handleSelected(row.id)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            </TableCell>
            {schema.map(({ render }) => render(row))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}
