import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "context";
import { string } from "yup";
import { AssociateBy } from "./measureSlice";



export interface Task {
  id: string;
  title: string;
  description: string;
  measureIds: Array<string>; // each task could have multiple measures
  datasetId: string; // each task combines with one dataset
  totalNum: number;
  annotations: Array<Map<string, Array<string>>>;
};


export interface AddTaskAction {
  type: string;
  payload: Task;
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