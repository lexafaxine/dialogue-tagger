import React from "react";

import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";

import { FieldSchema } from "components/DataTable";
import { Idable, Sequence2IdMap } from "utilities";

interface EnhancedTableBodyProps<T extends Idable> {
  schema: FieldSchema<T>[];
  data: Sequence2IdMap<T>;
}

export function EnhancedTableBody<T extends Idable>({
  data, schema,
}: EnhancedTableBodyProps<T>) {
  return (
    <TableBody>
      {Object.entries(data).map(([id, row], index) => {
        // const isItemSelected = isSelected(row.name);
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow
            hover
            // onClick={(event) => handleClick(event, row.name)}
            role="checkbox"
            // aria-checked={isItemSelected}
            tabIndex={-1}
            key={id}
            // selected={isItemSelected}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={false}
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </TableCell>

            {schema.map(({
              render,
            }) => render(row as T))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}
