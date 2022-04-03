import * as React from "react";
import { FC } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { Measure } from "models";
import { Sequence2IdMap } from "utilities";

interface MeasureSelectProps {
  measures: Sequence2IdMap<Measure>;
  measureIds: Array<string>;
  setMeasureIds: (ids: Array<string>) => void;
  setIsReset: (bool: boolean) => void;
}

export const MeasureSelect: FC<MeasureSelectProps> = ({
  measures, measureIds, setMeasureIds, setIsReset,
}) => {
  const [value, setValue] = React.useState<string[]>([]);

  const idOptions = Object.keys(measures);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any, newValue: string[]) => {
    if (newValue.sort().toString() !== measureIds.sort().toString()) {
      setIsReset(true); // change measure --> task reset;
      setMeasureIds(newValue);
    }

    setValue(newValue);
  };

  return (
    <Stack
      spacing={3}
      sx={{ width: 500 }}
    >
      <Autocomplete
        multiple
        id="tags-outlined"
        value={value}
        options={idOptions}
        onChange={onChange}
        getOptionLabel={(option) => measures[option].title}
        defaultValue={measureIds}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="SelectMeasures"
            placeholder="Measures.."
          />
        )}
      />
    </Stack>
  );
};
