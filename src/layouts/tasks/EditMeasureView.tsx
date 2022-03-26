// @mui material components
import Grid from "@mui/material/Grid";

// Data
import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import { MeasureTable } from "./MeasureTable";
import { useMeasures } from "hooks/useMeasureList";
import { MeasureModal, MeasureModalProps } from "./modal/MeasureModal";

export const EditMeasureView: FC = ({}) => {
  const { measures, updateMeasure } = useMeasures();
  const [modalProps, setModalProps] = useState<null | MeasureModalProps>(null);

  const onCloseModal = () => setModalProps(null);

  const onAddMeasure = () => {
    setModalProps({
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  const onEditMeasure = (id: string) => {
    setModalProps({
      initialData: measures[id],
      onSave: () => {},
      onClose: onCloseModal,
    });
  };

  return (
    <Grid item xs={12}>
      <MeasureTable source={measures} onClick={onEditMeasure} />
      {modalProps && <MeasureModal {...modalProps} onSave={updateMeasure} onClose={onCloseModal} />}
      <Button onClick={onAddMeasure}>Add Measure</Button>
    </Grid>
  );
};
