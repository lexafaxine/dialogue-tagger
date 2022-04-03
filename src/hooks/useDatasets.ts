import { useLiveQuery } from "dexie-react-hooks";
import { Dataset } from "models";
import { db } from "store/indexdb";
import { asIdMap } from "utilities";

import { useVersion } from "./useVersion";

export const useDatasets = () => {
  const { version, tick } = useVersion();
  const datasets = asIdMap(useLiveQuery(() => db.datasets?.toArray(), [version]) ?? []);

  const updateDatasets = (data: Dataset) => {
    db.datasets.put(data).then(tick);
  };

  return {
    datasets,
    updateDatasets,
  };
};
