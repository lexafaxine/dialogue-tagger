import { Measure } from "model";
import { Sequence2IdMap } from "utilities";

import { createSlice } from "@reduxjs/toolkit";

export interface AddMeasureAction {
  type: string;
  payload: Measure;
}

export const measuresSlice = createSlice({
  name: "measures",
  initialState: { measures: {} as Sequence2IdMap<Measure> },
  reducers: {
    update: (state, { payload }: AddMeasureAction) => ({
      measures: {
        ...state.measures,
        [payload.id]: payload,
      },
    }),
  },
});

export const { update } = measuresSlice.actions;

export default measuresSlice.reducer;
