import React, { FC, useState } from "react";

import { Grid } from "@mui/material";

import { useMeasures } from "hooks";

import { MeasureModal, MeasureModalProps } from "./modal";
import { WrappedDataTable } from "./table";

export const EditMeasureView: FC = ({}) => {
  const { measures, updateMeasure } = useMeasures();
  const [modalProps, setModalProps] = useState<null | MeasureModalProps>(null);

  const onClose = () => setModalProps(null);

  const onAdd = () => {
    setModalProps({
      onSave: () => {},
      onClose,
    });
  };

  const onEdit = (id: string) => {
    setModalProps({
      initialData: measures[id],
      onSave: () => {},
      onClose,
    });
  };

  return (
    <Grid item xs={12}>
      <WrappedDataTable title="Measure" source={measures} onRowClick={onEdit} onAdd={onAdd} onDelete={onAdd} />
      {modalProps && <MeasureModal {...modalProps} onSave={updateMeasure} onClose={onClose} />}
    </Grid>
  );
};
