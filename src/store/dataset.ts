import { createSlice } from "@reduxjs/toolkit";

import { Dataset } from "model";
import { Sequence2IdMap } from "utilities";

export interface AddDatasetAction {
  type: string;
  payload: Dataset;
}

export const datasetsSlice = createSlice({
  name: "datasets",
  initialState: { datasets: {} as Sequence2IdMap<Dataset> },
  reducers: {
    update: (state, { payload }: AddDatasetAction) => ({
      datasets: {
        ...state.datasets,
        [payload.id]: payload,
      },
    }),
  },
});

export const { update } = datasetsSlice.actions;

export default datasetsSlice.reducer;
