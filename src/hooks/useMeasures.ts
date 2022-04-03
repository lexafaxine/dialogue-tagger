import { Measure } from "model";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { merge } from "store/measure";

export const useMeasures = () => {
  const { measures } = useSelector((state: AppState) => state.measures);
  const dispatch = useDispatch();

  const updateMeasure = (data: Measure) => {
    dispatch(merge(data));
  };

  return {
    measures,
    updateMeasure,
  };
};
