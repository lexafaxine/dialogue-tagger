import { createSlice } from "@reduxjs/toolkit";

import { Measure } from "models";
import { Sequence2IdMap } from "utilities";

export interface AddMeasureAction {
  type: string;
  payload: Measure;
}

export const measuresSlice = createSlice({
  name: "measures",
  initialState: { measures: {} as Sequence2IdMap<Measure> },
  reducers: {
    merge: (state, { payload }: AddMeasureAction) => ({
      measures: {
        ...state.measures,
        [payload.id]: payload,
      },
    }),
  },
});

export const { merge } = measuresSlice.actions;

export default measuresSlice.reducer;
