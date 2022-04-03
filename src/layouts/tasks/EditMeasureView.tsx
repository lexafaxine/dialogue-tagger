import React, { FC, useState } from "react";

import { Button, TableCell } from "@mui/material";
import Grid from "@mui/material/Grid";

import { DataTable, DataTableProps, FieldSchema } from "components/DataTable";
import { useMeasures } from "hooks";
import { Measure } from "model";

import { MeasureModal, MeasureModalProps } from "./modal/MeasureModal";

const schema: FieldSchema<Measure>[] = [
  {
    name: "Id",
    render: (m) => <TableCell>{m.id}</TableCell>,
  },
  {
    name: "Title",
    render: (m) => <TableCell>{m.title}</TableCell>,
  },
];

const WrappedDataTable: FC<Omit<DataTableProps<Measure>, "schema">> = (props) => <DataTable {...props} schema={schema} />;

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
      <WrappedDataTable title="Measure" source={measures} onRowClick={onEditMeasure} onAdd={onAddMeasure} onDelete={onAddMeasure} />
      {modalProps && <MeasureModal {...modalProps} onSave={updateMeasure} onClose={onCloseModal} />}
    </Grid>
  );
};
