import { JSONSchema7 } from "json-schema";
import { Measure, MeasureTaskTypeEnum, TagGroup } from "model";

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
            "tags:turnbyturn": {
              type: "array",
              items: { type: "string" },
              title: "TurnByTurn Task Tags",
            },
          },
        },
      ],
    },
  },
};

export interface ISchema extends Omit<Measure, "tags"> {
  "tags:whole": TagGroup[];
  "tags:turnbyturn": TagGroup[];
}

export type IModel = Measure;
