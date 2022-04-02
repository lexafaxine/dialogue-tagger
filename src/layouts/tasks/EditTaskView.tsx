// @mui material components
import Grid from "@mui/material/Grid";

// Data
import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import {TaskTable} from "./TaskTable";
import {useTasks} from "hooks/useTasks"
import {TaskModal, TaskModalProps} from "./modal/TaskModal"
import { useMeasures } from "hooks/useMeasureList";
import { useDatasets } from "hooks/useDatasets";

export const EditTaskView: FC = ({}) => {
  const { measures, updateMeasure } = useMeasures();
  const { datasets, updateDatasets} = useDatasets();
  const { tasks, updateTask} = useTasks();

  const [modalProps, setModalProps] = useState<null | TaskModalProps>(null);

  const onCloseModal = () => setModalProps(null);

  const onAddTask = () => {
    setModalProps({
      measures: measures,
      datasets: datasets,
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  const onEditTask = (id: string) => {
    setModalProps({
      measures: measures,
      datasets: datasets,
      initialData: tasks[id],
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  return (
    <Grid item xs={12}>
      <TaskTable tasks={tasks} onClick={onEditTask} measures={measures} datasets={datasets}></TaskTable>
      {modalProps && <TaskModal {...modalProps} onSave={updateTask} onClose={onCloseModal}></TaskModal>}
      <Button onClick={onAddTask}>Add Task</Button>
    </Grid>
  )

}
