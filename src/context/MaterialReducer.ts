import { reducer, initialState } from "context";

export type MaterialState = typeof initialState;

export const MaterialReducer = (state: MaterialState = initialState, action: { type: string }): MaterialState => {
  return reducer(state, action);
};
