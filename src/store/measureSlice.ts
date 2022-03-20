import { createSlice } from "@reduxjs/toolkit";

export type TagGroup = string[];

export type MeasureType = "turnbyturn" | "whole";

export type AssociateBy<T, TKey extends keyof T & string> = Record<T[TKey] & string, Exclude<T, TKey>>;

interface BaseMeasure {
  id: string;
  title: string;
  description: string;
  type: MeasureType;
}

interface TurnByTurnMeasure extends BaseMeasure {
  type: "turnbyturn";
  tags: Array<TagGroup>;
}

export interface WholeMeasure extends BaseMeasure {
  type: "whole";
  tags: Array<TagGroup>;
}

export type Measure = WholeMeasure | TurnByTurnMeasure;

export interface AddMeasureAction {
  type: string;
  payload: Measure;
}

export const measuresSlice = createSlice({
  name: "measures",
  initialState: {
    measures: {} as AssociateBy<Measure, "id">,
  },
  reducers: {
    update: (state, { payload }: AddMeasureAction) => {
      return {
        measures: {
          ...state.measures,
          [payload.id]: payload,
        },
      };
    },
  },
});

export const { update } = measuresSlice.actions;

export default measuresSlice.reducer;
