import React, { ChangeEvent, FC, useState } from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Measure, MeasureType, TagGroup } from "model";
import { ModalSchemaForm } from "components/ModalSchemaForm";
import { string } from "yup";


const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "75%",
  minHeight: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export interface MeasureModalProps {
  initialData?: Measure;
  onSave: (data: Measure) => void;
  onClose: () => void;
}


enum TaskType {
  Whole = "whole",
  TurnByTurn = "turnbyturn",
}


const schema: any = {
  title: "Measure",
  type: "object",
  required: ["title"],
  properties: {
    title: {
      type: "string",
      title: "Title",
      default: "A new task",
    },
    description: {
      type: "string",
      title: "Description",
      default: "",
    },
    type: {
      type: "string",
      title: "Measure Scale",
      anyOf: [
        {
          type: "string",
          title: "whole",
          enum: [
            TaskType.Whole,
          ]
        },
        {
          type: "string",
          title: "turnbyturn",
          enum: [
            TaskType.TurnByTurn,
          ],
        },
      ],
      default: null,
    },
  },
  dependencies: {
    type: {
      oneOf: [
        {
          "properties": {
            "type": {
              "enum": [
                TaskType.Whole,
              ]
            },
            "tags:whole": {
              type: "array",
              items: {
                type: "string"
              },
              title: "Whole Task Tags",
            }
          },
        },
        {
          "properties": {
            "type": {
              "enum": [
                TaskType.TurnByTurn,
              ]
            },
            "tags:turnbyturn": {
              type: "array",
              items: {
                type: "string"
              },
              title: "TurnByTurn Task Tags",
            },
          },
        }
      ],
    }
  },
};


interface FormData extends Omit<Measure, "tags"> {
  "tags:whole": TagGroup[];
  "tags:turnbyturn": TagGroup[];
}


function fromFormSchemaModel(data: FormData): Measure {
  return {
    id: data.id,
    description: data.description,
    title: data.title,
    type: data.type,
    tags: (data[`tags:${data.type}`] ?? []) as TagGroup[],
  }
}

function toFormSchemaModel(m: Measure): FormData {
  return {
    ...m,
    [`tags:${m.type}`]: m.tags,
  } as unknown as FormData
}


export const MeasureModal: FC<MeasureModalProps> = ({
  initialData,
  onClose,
  onSave,
}) => {
  return (
    <Modal open aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <ModalSchemaForm<FormData, Measure>
          schema={schema}
          initialModel={initialData}
          fromFormDataTransformer={fromFormSchemaModel}
          toFormDataTransformer={toFormSchemaModel}
          onSave={onSave}
          onClose={onClose} />
      </Box>
    </Modal>
  );
};
