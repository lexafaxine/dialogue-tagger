import { TaskDefinition } from "model";
import {
  useDispatch, useSelector,
} from "react-redux";
import { AppState } from "store";
import { update } from "store/task";

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
