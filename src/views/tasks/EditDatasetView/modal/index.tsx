import React, { FC } from "react";

import { ModalSchemaForm } from "components/ModalSchemaForm";
import { randomString } from "utilities";
import { ModalLayout } from "views/tasks/ModalLayout";

import { IFormData, IModel, schema } from "./schema";

function fromFormSchemaModel(data: IFormData): IModel {
  return {
    id: data.id ?? randomString(),
    description: data.description,
    title: data.title,
    dialogues: [],
  };
}

function toFormSchemaModel(m: IModel): IFormData {
  return { ...m } as unknown as IFormData;
}

export interface DatasetModalProps {
  initialData?: IModel;
  onSave: (data: IModel) => void;
  onClose: () => void;
}

export const DatasetModal: FC<DatasetModalProps> = ({
  initialData,
  onClose,
  onSave,
}) => (
  <ModalLayout>
    <ModalSchemaForm<IFormData, IModel>
      schema={schema}
      initialModel={initialData}
      fromFormDataTransformer={fromFormSchemaModel}
      toFormDataTransformer={toFormSchemaModel}
      onSave={onSave}
      onClose={onClose}
    />
  </ModalLayout>
);
