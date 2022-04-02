import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useMeasures } from "hooks/useMeasureList";
import { AssociateBy, Measure } from "store/measureSlice";
import { FC } from "react";

interface MeasureSelectProps {
  measures: AssociateBy<Measure, "id">;
  measureIds: Array<string>;
  setMeasureIds: (ids: Array<string>) => void;
  setIsReset: (bool: boolean) => void;
}

export const MeasureSelect: FC<MeasureSelectProps> = ({ measures, measureIds, setMeasureIds, setIsReset }) => {
  const [value, setValue] = React.useState<string[]>([]);

  const idOptions = Object.keys(measures);

  const onChange = (event: any, newValue: string[]) => {

    if (newValue.sort().toString() !== measureIds.sort().toString()) {
      setIsReset(true); // change measure --> task reset;
      setMeasureIds(newValue);
    }

    setValue(newValue);

  }

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
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
}
