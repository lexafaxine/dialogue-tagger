import { Idable } from "utilities";

export type TTagId = string;

export type TMeasureId = string;

export type TDialogueId = string;

export type TDatasetId = string;

export type TSenderId = string;

export type TTaskDefinitionId = string;

export type TTaskProgressId = string;

export interface MetaInfo {
  title: string;
  description: string;
}

export interface Tag extends Idable<TTagId> {
  name: string;
}

export type TagGroup = Array<Tag>;

export type MeasureType = "turnbyturn" | "whole";

export interface Measure extends MetaInfo, Idable<TMeasureId> {
  type: "turnbyturn" | "whole";
  tags: Array<TagGroup>;
}

export interface Sender extends Idable<TSenderId> {
  name: string;
}

export interface Turn {
  sender: TSenderId;
  utterances: Array<string>;
}

export interface Dialogue extends Idable<TDialogueId> {
  turns: Array<Turn>;
}

export interface Dataset extends MetaInfo, Idable<TDatasetId> {
  dialogues: Array<Dialogue>;
}

export interface TaskDefinition extends MetaInfo, Idable<TTaskDefinitionId> {
  measureIds: Array<TMeasureId>;
  datasetId: TDatasetId;
}

export interface TaskProgress extends MetaInfo, Idable<TTaskProgressId> {
  taskDefinitionId: TTaskDefinitionId;
  annotations: Array<Map<TMeasureId, Array<TTagId>>>;
}
