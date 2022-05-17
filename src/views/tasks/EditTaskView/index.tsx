import React, { FC, useCallback, useState } from "react";

import { useMeasures, useTasks } from "hooks";
import { useDummyDatasets } from "hooks/useDummyDataset";

import { TaskModal, TaskModalProps } from "./modal";
import { WrappedDataTable } from "./table";

export const EditTaskView: FC = () => {
  const { measures } = useMeasures();
  const { datasets } = useDummyDatasets();
  const { tasks, mergeTasks } = useTasks();

  const [modalProps, setModalProps] = useState<null | TaskModalProps>(null);

  const measureChoices = Object.entries(measures).map(([id, r]) => ({ id, title: r.title }));

  const datasetsChoices = Object.entries(datasets).map(([id, r]) => ({ id, title: r.title }));

  const onClose = () => setModalProps(null);

  const onAdd = useCallback(() => {
    setModalProps({
      measures: measureChoices,
      datasets: datasetsChoices,
      onSave: mergeTasks,
      onClose,
    });
  }, [datasetsChoices, measureChoices, mergeTasks]);

  const onEdit = (id: string) => {
    setModalProps({
      initialData: tasks[id],
      measures: measureChoices,
      datasets: datasetsChoices,
      onSave: mergeTasks,
      onClose,
    });
  };

  return (
    <>
      <WrappedDataTable
        title="Task"
        data={Object.values(tasks)}
        onRowClick={onEdit}
        onAdd={onAdd}
        onDelete={onAdd}
      />
      {modalProps && <TaskModal {...modalProps} onSave={mergeTasks} onClose={onClose} />}
    </>
  );
};
