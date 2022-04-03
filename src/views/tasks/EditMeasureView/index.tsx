import React, { FC, useState } from "react";

import { useMeasures } from "hooks";

import { MeasureModal, MeasureModalProps } from "./modal";
import { WrappedDataTable } from "./table";

export const EditMeasureView: FC = () => {
  const { measures, updateMeasure } = useMeasures();
  const [modalProps, setModalProps] = useState<null | MeasureModalProps>(null);

  const onClose = () => setModalProps(null);

  const onAdd = () => {
    setModalProps({
      onSave: updateMeasure,
      onClose,
    });
  };

  const onEdit = (id: string) => {
    setModalProps({
      initialData: measures[id],
      onSave: updateMeasure,
      onClose,
    });
  };

  return (
    <>
      <WrappedDataTable
        title="Measure"
        data={Object.values(measures)}
        onRowClick={onEdit}
        onAdd={onAdd}
        onDelete={onAdd}
      />
      {modalProps && <MeasureModal {...modalProps} onSave={updateMeasure} onClose={onClose} />}
    </>
  );
};
