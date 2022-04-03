import { JSONSchema7 } from "json-schema";
import { Dataset, Measure, TaskDefinition } from "model";

export type MeasureChoice = Pick<Measure, "id" | "title">;

export type DatasetChoice = Pick<Dataset, "id" | "title">;

export function schemaBuilder(measures: MeasureChoice[], datasets: DatasetChoice[]): JSONSchema7 {
  return {
    title: "Task",
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
      measureIds: {
        title: "Measures",
        type: "array",
        items: {
          type: "string",
          anyOf: measures.map(({ id, title }) => ({
            type: "string",
            title,
            enum: [
              id,
            ],
          })),
        },
      },
      datasetId: {
        type: "string",
        title: "Dataset",
        default: null,
        anyOf: datasets.map(({ id, title }) => ({
          type: "string",
          title,
          enum: [
            id,
          ],
        })),
      },
    },
  };
}

export type IFormData = Omit<TaskDefinition, "tags">

export type IModel = TaskDefinition;
