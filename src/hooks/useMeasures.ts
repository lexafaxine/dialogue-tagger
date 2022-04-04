import { useLiveQuery } from "dexie-react-hooks";
import { Measure } from "models";
import { db } from "store/indexdb";
import { asIdMap } from "utilities";

import { useVersion } from "./useVersion";

export const useMeasures = () => {
  const { version, tick } = useVersion();
  const measures = asIdMap(useLiveQuery(() => db.measures?.toArray(), [version]) ?? []);

  const updateMeasure = (data: Measure) => { db.measures.put(data).then(tick); };
  const deleteMeasure = (data: Measure) => { db.measures.delete(data.id).then(tick); };

  return {
    measures,
    updateMeasure,
    deleteMeasure,
  };
};
