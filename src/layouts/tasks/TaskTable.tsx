import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { FC } from "react";
import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { useDatasets } from "hooks/useDatasets";
import { useMeasures } from "hooks/useMeasureList";
import { useTasks } from "hooks/useTasks";
import { Dataset } from "store/datasetSlice";
import { AssociateBy, Measure } from "store/measureSlice";
import { Task } from "store/taskSlice";

interface TaskFieldSchema {
  name: string;
  render: (task: Task, measures: AssociateBy<Measure, "id">, datasets: AssociateBy<Dataset, "id">) => ReturnType<FC>;
}

const fieldSchemas: TaskFieldSchema[] = [
  {
    name: "Title",
    render: (task: Task, measures: AssociateBy<Measure, "id">, datasets: AssociateBy<Dataset, "id">) => <>{task.title}</>,
  },
  {
    name: "Description",
    render: (task: Task, measures: AssociateBy<Measure, "id">, datasets: AssociateBy<Dataset, "id">) => <>{task.description}</>,
  },
  {
    name: "Measures",
    render: (task: Task, measures: AssociateBy<Measure, "id">, datasets: AssociateBy<Dataset, "id">) => {
      return (
        <>
          {measures[task.measureIds[0]].title}...
        </>
      )
    },
  },
  {
    name: "Dataset",
    render: (task: Task, measures: AssociateBy<Measure, "id">, datasets: AssociateBy<Dataset, "id">) => {
      return (
        <>
          {
            datasets[task.datasetId].title
          }
        </>
      );
    },
  },
  {
    name: "Progress",
    render: (task: Task, measures: AssociateBy<Measure, "id">, datasets: AssociateBy<Dataset, "id">) => {

      const progress: number = task.annotations ? task.annotations.length / task.totalNum : 0;

      return (
        <>
          {progress}
        </>
      )
    }
  }
];

export interface TaskTableProps {
  measures: AssociateBy<Measure, "id">;
  datasets: AssociateBy<Dataset, "id">;
  tasks: AssociateBy<Task, "id">;
  onClick: (id:string) => void;
}

const columns = ["Title", "Description", "Measure", "Dataset", "Progress"]

export const TaskTable: FC<TaskTableProps> = ({ tasks, measures, datasets, onClick }) => {

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
          {Object.entries(tasks).map(([id, row], i) => (
            <TableRow key={id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {fieldSchemas.map(({ render }) => (
                <TableCell align="center">{render(row, measures, datasets)}</TableCell>
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
  )
}