import { TaskDefinition } from "model";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { merge } from "store/task";

export const useTasks = () => {
  const { tasks } = useSelector((state: AppState) => state.tasks);
  const dispatch = useDispatch();

  const mergeTasks = (data: TaskDefinition) => {
    dispatch(merge(data));
  };

  return {
    tasks,
    mergeTasks,
  };
};
