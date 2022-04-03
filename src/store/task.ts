import { TaskDefinition } from "model";
import { AssociateBy } from "utilities";

import { createSlice } from "@reduxjs/toolkit";

export interface AddTaskAction {
  type: string;
  payload: TaskDefinition;
}

export const taskSlice = createSlice({
  name: "tasks",
  initialState: { tasks: {} as AssociateBy<TaskDefinition, "id"> },
  reducers: {
    update: (state, { payload }: AddTaskAction) => ({
      tasks: {
        ...state.tasks,
        [payload.id]: payload,
      },
    }),
  },
});

export const { update } = taskSlice.actions;

export default taskSlice.reducer;
