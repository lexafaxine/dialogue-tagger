import React, { FC, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import { AssociateBy, Idable, Sequence2IdMap } from "utilities";

import { EnhancedTableBody } from "./TableBody";
import { EnhancedTableHead } from "./TableHeader";
import { EnhancedTableToolbar } from "./Toolbar";

export interface FieldSchema<T> {
  name: string;
  render: (data: T) => ReturnType<FC>;
}

export interface DataTableProps<T extends Record<string, any>> {
  title: string;
  source: AssociateBy<T, "id">;
  schema: FieldSchema<T>[];

  onAdd: () => void;
  onDelete: () => void;
  onRowClick: (id: string) => void;
}

export function DataTable<T extends Idable>({
  title, source, onRowClick, schema, onAdd, onDelete,
}: DataTableProps<T>) {
  const rows = Object.values(source);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selected, setSelected] = useState<readonly string[]>([]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <EnhancedTableToolbar
        title={title}
        numSelected={0}
        onAdd={onAdd}
        onDelete={onDelete}
      />
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 750 }}
          aria-labelledby="tableTitle"
          size="small"
        >
          <EnhancedTableHead<T> schema={schema} numSelected={1} rowCount={0} />
          <EnhancedTableBody<T> schema={schema} data={source} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
