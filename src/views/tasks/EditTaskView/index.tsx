// @mui material components
import React, { FC, useState } from "react";

// Data
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useDatasets } from "hooks/useDatasets";
import { useMeasures } from "hooks/useMeasures";
import { useTasks } from "hooks/useTasks";

import { TaskModal, TaskModalProps } from "./modal";
import { TaskTable } from "./table";

export const EditTaskView: FC = ({}) => {
  const { measures, updateMeasure } = useMeasures();
  const { datasets, updateDatasets } = useDatasets();
  const { tasks, updateTask } = useTasks();

  const [modalProps, setModalProps] = useState<null | TaskModalProps>(null);

  const onCloseModal = () => setModalProps(null);

  const onAddTask = () => {
    setModalProps({
      measures,
      datasets,
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  const onEditTask = (id: string) => {
    setModalProps({
      measures,
      datasets,
      // initialData: tasks[id],
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  return (
    <Grid item xs={12}>
      <TaskTable tasks={tasks} onClick={onEditTask} measures={measures} datasets={datasets} />
      {modalProps && <TaskModal {...modalProps} onSave={updateTask} onClose={onCloseModal} />}
      <Button onClick={onAddTask}>Add Task</Button>
    </Grid>
  );
};
