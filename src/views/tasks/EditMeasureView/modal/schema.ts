import { JSONSchema7 } from "json-schema";
import { Measure, MeasureTaskTypeEnum, TagGroup } from "models";

export const schema: JSONSchema7 = {
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
            MeasureTaskTypeEnum.Whole,
          ],
        },
        {
          type: "string",
          title: "turnbyturn",
          enum: [
            MeasureTaskTypeEnum.TurnByTurn,
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
          properties: {
            type: {
              enum: [
                MeasureTaskTypeEnum.Whole,
              ],
            },
            "tags:whole": {
              type: "array",
              items: { type: "string" },
              title: "Whole Task Tags",
            },
          },
        },
        {
          properties: {
            type: {
              enum: [
                MeasureTaskTypeEnum.TurnByTurn,
              ],
            },
            "tags:customer": {
              type: "array",
              items: { type: "string" },
              title: "Customer Task Tags",
            },
            "tags:helpdesk": {
              type: "array",
              items: { type: "string" },
              title: "Helpdesk Task Tags",
            },
          },
        },
      ],
    },
  },
};

export interface ISchema extends Omit<Measure, "tags"> {
  "tags:whole": TagGroup[];
  "tags:customer": TagGroup;
  "tags:helpdesk": TagGroup;
}

export type IModel = Measure;
