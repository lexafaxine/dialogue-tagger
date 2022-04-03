import React, { FC, useState } from "react";

// Data
import { Button, TableCell } from "@mui/material";
import Grid from "@mui/material/Grid";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { useDatasets } from "hooks/useDatasets";
import { Dataset } from "model";

import { WrappedDataTable } from "./table";

export interface DatasetModalProps {
}

export const EditDatasetView: FC = ({}) => {
  const { datasets, updateDatasets } = useDatasets();
  const [modalProps, setModalProps] = useState<null | DatasetModalProps>(null);

  const onCloseModal = () => setModalProps(null);

  const onAdd = () => {
    setModalProps({
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  const onEdit = (id: string) => {
    // setModalProps({
    //   initialData: measures[id],
    //   onSave: () => {},
    //   onClose: onCloseModal,
    // });
  };

  const onClickDataset = (id: string) => {
    console.log(datasets[id].dialogues);
  };

  return (
    <Grid item xs={12}>
      <WrappedDataTable title="Dataset" source={datasets} onRowClick={onClickDataset} onAdd={onAdd} onDelete={onAdd} />
    </Grid>
  );
};
