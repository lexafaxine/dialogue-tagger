import React, { FC } from "react";

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import { Dataset, Measure, TaskDefinition, TaskProgress } from "model";
import { AssociateBy, Sequence2IdMap } from "utilities";

interface TaskFieldSchema {
  name: string;
  render: (task: TaskDefinition, measures: Sequence2IdMap<Measure>, datasets: Sequence2IdMap<Dataset>) => ReturnType<FC>;
}

const fieldSchemas: TaskFieldSchema[] = [
  {
    name: "Title",
    render: (task) => <>{task.title}</>,
  },
  {
    name: "Description",
    render: (task) => <>{task.description}</>,
  },
  {
    name: "Measures",
    render: (task) => (
      <>
        {/* {measures[task.measureIds[0]].title}... */}
        aa
      </>
    ),
  },
  {
    name: "Dataset",
    render: (task, measures, datasets) => (
      <>
        {
            datasets[task.datasetId].title
          }
      </>
    ),
  },
  {
    name: "Progress",
    render: (task) =>

    // const progress: number = task.annotations ? task.annotations.length / task.totalNum : 0;

      (
        <>
          {0}
        </>
      ),

  },
];

export interface TaskTableProps {
  measures: AssociateBy<Measure, "id">;
  datasets: AssociateBy<Dataset, "id">;
  tasks: AssociateBy<TaskDefinition, "id">;
  onClick: (id:string) => void;
}

const columns = ["Title", "Description", "Measure", "Dataset", "Progress"];

export const TaskTable: FC<TaskTableProps> = ({
  tasks, measures, datasets, onClick,
}) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead style={{
        display: "table-header-group",
      }}
      >
        <TableRow>
          {fieldSchemas.map(({ name }) => (
            <TableCell align="center">{name}</TableCell>
          ))}
          <TableCell align="center">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(tasks).map(([id, row], i) => (
          <TableRow
            key={id}
            sx={{
              "&:last-child td, &:last-child th": {
                border: 0,
              },
            }}
          >
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
);
