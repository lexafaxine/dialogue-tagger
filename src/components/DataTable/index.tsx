import React, { FC, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";

import { GetComponentProps, Idable } from "utilities";

import { EnhancedTableBody } from "./TableBody";
import { EnhancedTableHead } from "./TableHeader";
import { EnhancedTableToolbar } from "./Toolbar";

export interface FieldSchema<T> {
  name: string;
  render: (data: T) => ReturnType<FC>;
}

const rowsPerPageOptions = [5, 10, 25, 50];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface DataTableProps<T extends Idable> {
  title: string;
  schema: FieldSchema<T>[];
  data: T[];

  onAdd: () => void;
  onDelete: () => void;
  onRowClick: (id: string) => void;
}

export function DataTable<T extends Idable>({
  title,
  data,
  schema,
  onAdd,
  onDelete,
  onRowClick,
}: DataTableProps<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rowSelected, setRowSelected] = useState<Set<string>>(new Set());

  const rows = data;
  const rowCount = rows.length;
  const numSelected = rowSelected.size;

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage: GetComponentProps<typeof TablePagination>["onPageChange"] = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage: GetComponentProps<typeof TablePagination>["onRowsPerPageChange"] = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <EnhancedTableToolbar
        title={title}
        numSelected={numSelected}
        onAdd={onAdd}
        onDelete={onDelete}
      />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby={title}
          size="small"
        >
          <EnhancedTableHead<T>
            schema={schema}
            numSelected={numSelected}
            rowCount={rowCount}
            onSelectAllClick={() => setRowSelected(new Set(rows.map(({ id }) => id)))}
          />
          <EnhancedTableBody<T>
            schema={schema}
            data={data}
            rowSelected={rowSelected}
            handleSelected={(id) => setRowSelected(new Set(rowSelected).add(id))}
            handleRowClick={onRowClick}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={rowCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
