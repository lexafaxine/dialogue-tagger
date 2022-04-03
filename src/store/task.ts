import { createSlice } from "@reduxjs/toolkit";

import { TaskDefinition } from "model";
import { Sequence2IdMap } from "utilities";

export interface AddTaskAction {
  type: string;
  payload: TaskDefinition;
}

export const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: {} as Sequence2IdMap<TaskDefinition> },
  reducers: {
    merge: (state, { payload }: AddTaskAction) => ({
      tasks: {
        ...state.tasks,
        [payload.id]: payload,
      },
    }),
  },
});

export const { merge } = taskSlice.actions;

export default taskSlice.reducer;
