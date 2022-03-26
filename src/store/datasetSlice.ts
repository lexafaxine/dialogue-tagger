import { createSlice } from "@reduxjs/toolkit";
// import { initDataset } from "layouts/tasks/modal/DatasetModal/example";
import { StringLocale } from "yup/lib/locale";
import { AssociateBy } from "./measureSlice";

export interface Dialogue {
  // { turns: { sender: string; utterances: string[]; }[]; id: string; }[]
  turns: {
    sender: string;
    utterances: Array<string>,
  }[];

  id: string;
}


export interface Dataset {
  id: string;
  title: string;
  description: string;
  dialogues: Array<Dialogue>;
}

export interface AddDatasetAction {
  type: string;
  payload: Dataset;
}

export const datasetsSlice = createSlice(
  {
    name: "datasets",
    initialState: {
      datasets: {} as AssociateBy<Dataset, "id">,
    },
    reducers: {
      update: (state, {payload}: AddDatasetAction) => {
        return {
          datasets: {
            ...state.datasets,
            [payload.id]: payload,
          }
        }
      }
    }
  }
);

export const {update} = datasetsSlice.actions;

export default datasetsSlice.reducer;