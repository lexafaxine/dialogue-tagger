import React, { FC } from "react";

import { ModalSchemaForm } from "components/ModalSchemaForm";
import { TagGroup } from "model";
import { ModalLayout } from "views/tasks/ModalLayout";

import { IModel, ISchema, schema } from "./schema";

function fromFormSchemaModel(data: ISchema): IModel {
  return {
    id: data.id,
    description: data.description,
    title: data.title,
    type: data.type,
    tags: (data[`tags:${data.type}`] ?? []) as TagGroup[],
  };
}

function toFormSchemaModel(m: IModel): ISchema {
  return {
    ...m,
    [`tags:${m.type}`]: m.tags,
  } as unknown as ISchema;
}

export interface MeasureModalProps {
  initialData?: IModel;
  onSave: (data: IModel) => void;
  onClose: () => void;
}

export const MeasureModal: FC<MeasureModalProps> = ({
  initialData,
  onClose,
  onSave,
}) => (
  <ModalLayout>
    <ModalSchemaForm<ISchema, IModel>
      schema={schema}
      initialModel={initialData}
      fromFormDataTransformer={fromFormSchemaModel}
      toFormDataTransformer={toFormSchemaModel}
      onSave={onSave}
      onClose={onClose}
    />
  </ModalLayout>
);
