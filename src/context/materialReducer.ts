import { initialState, reducer } from "context";

export type MaterialState = typeof initialState;

// eslint-disable-next-line max-len
export const MaterialReducer = (state: MaterialState = initialState, action: { type: string }): MaterialState => reducer(state, action);
