import { Dataset } from "model";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";

export const useDatasets = () => {
  const { datasets } = useSelector((state: AppState) => state.datasets);
  const dispatch = useDispatch();

  const updateDatasets = (data: Dataset) => {
    dispatch(updateDatasets(data));
  };

  return {
    datasets,
    updateDatasets,
  };
};
