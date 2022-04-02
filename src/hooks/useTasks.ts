import { useSelector, useDispatch } from "react-redux";
import { AppState } from "store";
import { Task, update } from "store/taskSlice";

export const useTasks = () => {
  const { tasks } = useSelector((state: AppState) => state.tasks);
  const dispatch = useDispatch();

  const updateTask = (data: Task) => {
    dispatch(update(data));
  }

  return {
    tasks,
    updateTask,
  }

}