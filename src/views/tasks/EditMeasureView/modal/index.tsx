import React, { FC } from "react";

import { ModalSchemaForm } from "components/ModalSchemaForm";
import { TagGroup } from "models";
import { randomString } from "utilities";
import { ModalLayout } from "views/tasks/ModalLayout";

import { IModel, ISchema, schema } from "./schema";

function fromFormSchemaModel(data: ISchema): IModel {
  const wholeTags: TagGroup[] = data["tags:whole"] ?? [] as TagGroup[];
  const turnbyturnTags: TagGroup[] = [data["tags:customer"] ?? [], data["tags:helpdesk"] ?? []] as TagGroup[];
  const tags: TagGroup[] = (data.type === "whole") ? wholeTags : turnbyturnTags;

  return {
    id: data.id ?? randomString(),
    description: data.description,
    title: data.title,
    type: data.type,
    // tags: (data[`tags:${data.type}`] ?? []) as TagGroup[],
    tags,
  };
}

function toFormSchemaModel(m: IModel): ISchema {
  if (m.type === "whole") {
    return {
      ...m,
      [`tags:${m.type}`]: m.tags,
    } as unknown as ISchema;
  }
  return {
    ...m,
    "tags:customer": m.tags[0],
    "tags:helpdesk": m.tags[1],
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
