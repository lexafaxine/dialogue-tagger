/* eslint-disable max-len */
import { useEffect } from "react";

import { Measure } from "model";

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
  const { measures, updateMeasure } = useMeasures();

  useEffect(() => {
    testMeasures.forEach(updateMeasure);
  }, []);

  return {
    measures,
    updateMeasure,
  };
};
