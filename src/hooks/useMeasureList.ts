import { Measure } from "model";
import { AppState } from "store";
import { update } from "store/measure";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useMeasures = () => {
  const { measures } = useSelector((state: AppState) => state.measures);
  const dispatch = useDispatch();

  const updateMeasure = (data: Measure) => {
    dispatch(update(data));
  };

  return {
    measures,
    updateMeasure,
  };
};
