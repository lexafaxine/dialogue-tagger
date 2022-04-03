// @mui material components
import React, { FC, useState } from "react";

// Data
import Grid from "@mui/material/Grid";

import { useDatasets } from "hooks/useDatasets";
import { useMeasures } from "hooks/useMeasures";
import { useTasks } from "hooks/useTasks";

import { TaskModal, TaskModalProps } from "./modal";
import { WrappedDataTable } from "./table";

export const EditTaskView: FC = () => {
  const { measures } = useMeasures();
  const { datasets } = useDatasets();
  const { tasks, updateTask } = useTasks();

  const [modalProps, setModalProps] = useState<null | TaskModalProps>(null);

  const onCloseModal = () => setModalProps(null);

  const measureChoices = Object.entries(measures).map(([id, r]) => ({ id, title: r.title }));
  const datasetsChoices = Object.entries(datasets).map(([id, r]) => ({ id, title: r.title }));

  const onAddTask = () => {
    setModalProps({
      measures: measureChoices,
      datasets: datasetsChoices,
      onSave: () => { },
      onClose: onCloseModal,
    });
  };

  const onEditTask = () => {
    setModalProps({
      measures: measureChoices,
      datasets: datasetsChoices,
      // initialData: tasks[id],
      onSave: () => { },
      onClose: onCloseModal,
    });
  };

  return (
    <Grid item xs={12}>
      <WrappedDataTable
        title="Task"
        source={tasks}
        onRowClick={onEditTask}
        onAdd={onAddTask}
        onDelete={onAddTask}
      />
      {modalProps && <TaskModal {...modalProps} onSave={updateTask} onClose={onCloseModal} />}
    </Grid>
  );
};
