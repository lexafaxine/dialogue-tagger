import { TaskDefinition } from "model";
import { AppState } from "store";
import { update } from "store/task";

import { useDispatch, useSelector } from "react-redux";

export const useTasks = () => {
  const { tasks } = useSelector((state: AppState) => state.tasks);
  const dispatch = useDispatch();

  const updateTask = (data: TaskDefinition) => {
    dispatch(update(data));
  };

  return {
    tasks,
    updateTask,
  };
};
