import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "context";
import { string } from "yup";
import { MetaInfo } from "./datasetSlice";
import { AssociateBy } from "./measureSlice";

type TTagId = string;
type TMeasureId = string;
type TDatasetId = string;
type TTaskDefinitionId = string;


export interface TaskDefinition extends MetaInfo{
  id: string;
  measureIds: Array<TMeasureId>; // each task could have multiple measures
  datasetId: TDatasetId; // each task combines with one dataset
};


export interface TaskProgress extends MetaInfo {
  totalNum: number;
  id: string;
  taskDefinitionId: TTaskDefinitionId;
  annotations: Array<Map<TMeasureId, Array<TTagId>>>;
}


export interface AddTaskAction {
  type: string;
  payload: TaskDefinition;
}

export const taskSlice = createSlice(
  {
    name: "tasks",
    initialState: {
      tasks: {} as AssociateBy<Task, "id">,
    },
    reducers: {
      update: (state, { payload }: AddTaskAction) => {
        return {
          tasks: {
            ...state.tasks,
            [payload.id]: payload,
          },
        };
      },
    },
  }
);

export const { update } = taskSlice.actions;

export default taskSlice.reducer;