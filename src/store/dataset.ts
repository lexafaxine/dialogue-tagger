import { createSlice } from "@reduxjs/toolkit";

import { Dataset } from "model";
import { Sequence2IdMap } from "utilities";

export interface MergeDatasetAction {
  type: string;
  payload: Dataset;
}

export const datasetsSlice = createSlice({
  name: "datasets",
  initialState: { datasets: {} as Sequence2IdMap<Dataset> },
  reducers: {
    merge: (state, { payload }: MergeDatasetAction) => ({
      datasets: {
        ...state.datasets,
        [payload.id]: payload,
      },
    }),
  },
});

export const { merge } = datasetsSlice.actions;

export default datasetsSlice.reducer;
