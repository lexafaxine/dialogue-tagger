import Dexie, { Table } from "dexie";
import { Dataset, Measure, TaskDefinition } from "models";

export class MeasureDexie extends Dexie {
  measures!: Table<Measure>;

  datasets!: Table<Dataset>;

  tasksDefinitions!: Table<TaskDefinition>;

  constructor() {
    super("dialogue-tagger");
    this
      .version(1)
      .stores({
        measures: "id",
        datasets: "id",
        tasksDefinitions: "id",
      });
  }
}

export const db = new MeasureDexie();
