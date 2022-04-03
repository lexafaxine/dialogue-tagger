import React, { FC, useState } from "react";

// Data
import Grid from "@mui/material/Grid";

import { useDatasets } from "hooks/useDatasets";

import { DatasetModal, DatasetModalProps } from "./modal";
import { WrappedDataTable } from "./table";

export const EditDatasetView: FC = () => {
  const { datasets, updateDatasets } = useDatasets();
  const [modalProps, setModalProps] = useState<null | DatasetModalProps>(null);

  const onClose = () => setModalProps(null);

  const onAdd = () => {
    setModalProps({
      onSave: () => {},
      onClose,
    });
  };

  const onEdit = () => {
    // setModalProps({
    //   initialData: measures[id],
    //   onSave: () => {},
    //   onClose: onCloseModal,
    // });
  };

  // const onClickDataset = (id: string) => {
  //   console.log(datasets[id].dialogues);
  // };

  return (
    <Grid item xs={12}>
      <WrappedDataTable
        title="Datasets"
        source={datasets}
        onRowClick={onEdit}
        onAdd={onAdd}
        onDelete={onAdd}
      />
      {modalProps && <DatasetModal {...modalProps} onSave={updateDatasets} onClose={onClose} />}
    </Grid>
  );
};
