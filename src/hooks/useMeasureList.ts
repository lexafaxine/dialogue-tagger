import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store";
import { Measure, update } from "store/measureSlice";

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
