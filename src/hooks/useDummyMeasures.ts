/* eslint-disable max-len */
import { useEffect } from "react";

import { Measure } from "models";

import { useMeasures } from "./useMeasures";

const testMeasures: Measure[] = [
  {
    id: "abcdef",
    title: "test measure 1",
    description: "abc",
    type: "turnbyturn",
    tags: [
      [
        {
          id: "abc",
          name: "cdef",
        },
      ],
    ],
  },
];

export const useDummyMeasures: typeof useMeasures = () => {
  const {
    measures, updateMeasure, ...rest
  } = useMeasures();

  useEffect(() => {
    testMeasures.forEach(updateMeasure);
  }, [updateMeasure]);

  return {
    measures,
    updateMeasure,
    ...rest,
  };
};
