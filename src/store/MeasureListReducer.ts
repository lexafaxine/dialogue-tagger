
export const MEASURELIST_TYPE = "MEASURE_LIST";


type Tags = string[];

interface BaseMeasure {
  title: string;
  description: string;
}

interface WholeMeasure extends BaseMeasure {
  type: "whole";
  tags: Tags;
}


interface TurnByTurnMeasure extends BaseMeasure {
  type: "turnbyturn";
  tags: Array<Tags>;
}

export type Measure = WholeMeasure | TurnByTurnMeasure;

export interface MeasureListState {
  measures: Array<Measure>;
}

export interface MeasureListAction {
  type: string;
  payload: MeasureListState;
}

const initState: MeasureListState = {
  measures: [],
}

export const MeasureListReducer = (state: MeasureListState = initState, action: MeasureListAction): MeasureListState => {
  switch (action.type) {
    case MEASURELIST_TYPE:
      return action.payload;
    
    default:
      return state;
  }
}