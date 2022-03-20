export const MISSIONS_TYPE = "MISSIONS_TYPE";

type Tags = string[];

interface BaseMesure {
  name: string;
}

interface WholeMeasure extends BaseMesure {
  type: "whole";
  tags: Tags;
}

interface TurnByTurnMeasure extends BaseMesure {
  type: "turnbyturn";
  tags: Array<Tags>;
}

type Measure = WholeMeasure | TurnByTurnMeasure;

export interface MissionDefinition {
  title: string;
  description: string;
  measures: Array<Measure>;
}

export interface MissionState {
  missions: MissionDefinition[];
}

export interface MissionsAction {
  type: string;
  payload: MissionState;
}

const initState: MissionState = {
  missions: [],
};

export const MissionsReducer = (state: MissionState = initState, action: MissionsAction): MissionState => {
  switch (action.type) {
    case MISSIONS_TYPE:
      return action.payload;
    default:
      return state;
  }
};
