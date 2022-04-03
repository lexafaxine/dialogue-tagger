import { useLiveQuery } from "dexie-react-hooks";
import { TaskDefinition } from "models";
import { db } from "store/indexdb";
import { asIdMap } from "utilities";

import { useVersion } from "./useVersion";

export const useTasks = () => {
  const { version, tick } = useVersion();
  const tasks = asIdMap(useLiveQuery(() => db.tasksDefinitions?.toArray(), [version]) ?? []);

  const mergeTasks = (data: TaskDefinition) => {
    db.tasksDefinitions.put(data).then(tick);
  };

  return {
    tasks,
    mergeTasks,
  };
};
