import React, { FC } from "react";

import { ModalSchemaForm } from "components/ModalSchemaForm";
import { randomString } from "utilities";
import { ModalLayout } from "views/tasks/ModalLayout";

import {
  DatasetChoice, IFormData, IModel, MeasureChoice, schemaBuilder,
} from "./schema";

function fromFormSchemaModel(data: IFormData): IModel {
  return {
    id: data.id ?? randomString(),
    title: data.title,
    description: data.description,
    measureIds: data.measureIds,
    datasetId: data.datasetId,
  };
}

function toFormSchemaModel(m: IModel): IFormData {
  return { ...m } as IFormData;
}

export interface TaskModalProps {
  initialData?: IModel;
  measures: MeasureChoice[];
  datasets: DatasetChoice[];
  onSave: (data: IModel) => void;
  onClose: () => void;
}

export const TaskModal: FC<TaskModalProps> = ({
  initialData,
  onClose,
  onSave,
  measures,
  datasets,
}) => (
  <ModalLayout>
    <ModalSchemaForm<IFormData, IModel>
      schema={schemaBuilder(measures, datasets)}
      initialModel={initialData}
      fromFormDataTransformer={fromFormSchemaModel}
      toFormDataTransformer={toFormSchemaModel}
      onSave={onSave}
      onClose={onClose}
    />
  </ModalLayout>
);
