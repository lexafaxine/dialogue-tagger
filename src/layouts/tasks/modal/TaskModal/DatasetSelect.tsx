import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useMeasures } from "hooks/useMeasureList";
import { AssociateBy, Measure } from "store/measureSlice";
import { FC } from "react";
import { Dataset } from "store/datasetSlice";

interface DatasetSelectProps {
  datasets: AssociateBy<Dataset, "id">
  datasetId: string;
  setDatasetId: (id: string) => void;
  setIsReset: (bool: boolean) => void;
}

export const DatasetSelect: FC<DatasetSelectProps> = ({ datasets, datasetId, setDatasetId, setIsReset }) => {

  const idOptions = Object.keys(datasets);
  
  const onChange = (event: any, newValue: string | null) => {
    if (newValue) {
      if (newValue !== datasetId) {
        setIsReset(true);
        setDatasetId(newValue ? newValue : "");
      }
    }
  }

  return (
    <Stack spacing={3} sx={{ width: 500 }}>
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
}
