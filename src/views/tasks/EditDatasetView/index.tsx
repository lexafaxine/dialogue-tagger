import React, { FC, useState } from "react";

import { useDatasets } from "hooks/useDatasets";

import { DatasetModal, DatasetModalProps } from "./modal";
import { WrappedDataTable } from "./table";

export const EditDatasetView: FC = () => {
  const { datasets, updateDatasets } = useDatasets();
  const [modalProps, setModalProps] = useState<null | DatasetModalProps>(null);

  const onClose = () => setModalProps(null);

  const onAdd = () => {
    setModalProps({
      onSave: updateDatasets,
      onClose,
    });
  };

  const onEdit = (id: string) => {
    setModalProps({
      initialData: datasets[id],
      onSave: updateDatasets,
      onClose,
    });
  };

  return (
    <>
      <WrappedDataTable
        title="Datasets"
        data={Object.values(datasets)}
        onRowClick={onEdit}
        onAdd={onAdd}
        onDelete={onAdd}
      />
      {modalProps && <DatasetModal {...modalProps} onSave={updateDatasets} onClose={onClose} />}
    </>
  );
};
