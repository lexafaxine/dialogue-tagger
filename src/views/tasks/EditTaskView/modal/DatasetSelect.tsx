import * as React from "react";
import { FC } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { Dataset } from "models";
import { Sequence2IdMap } from "utilities";

interface DatasetSelectProps {
  datasets: Sequence2IdMap<Dataset>
  datasetId: string;
  setDatasetId: (id: string) => void;
  setIsReset: (bool: boolean) => void;
}

export const DatasetSelect: FC<DatasetSelectProps> = ({
  datasets, datasetId, setDatasetId, setIsReset,
}) => {
  const idOptions = Object.keys(datasets);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any, newValue: string | null) => {
    if (newValue) {
      if (newValue !== datasetId) {
        setIsReset(true);
        setDatasetId(newValue || "");
      }
    }
  };

  return (
    <Stack
      spacing={3}
      sx={{ width: 500 }}
    >
      <Autocomplete
        id="tags-outlined"
        options={idOptions}
        onChange={onChange}
        getOptionLabel={(option) => datasets[option].title}
        defaultValue={null}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="SelectDataset"
            placeholder="Dataset.."
          />
        )}
      />
    </Stack>
  );
};
