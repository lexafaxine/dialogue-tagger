import { initialState, reducer } from "context";

export type MaterialState = typeof initialState;

export const MaterialReducer = (state: MaterialState = initialState, action: { type: string }): MaterialState => reducer(state, action);
