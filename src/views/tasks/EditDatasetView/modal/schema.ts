import { JSONSchema7 } from "json-schema";
import { Dataset } from "models";

export const schema: JSONSchema7 = {
  title: "Dataset",
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
  },
};

export type IFormData = Omit<Dataset, "">

export type IModel = Omit<Dataset, "">;
