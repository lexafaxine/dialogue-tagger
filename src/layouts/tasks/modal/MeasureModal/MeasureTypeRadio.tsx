import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React, { ChangeEvent, FC } from "react";

interface RadioMeasureScaleProps {
  choices: Array<string>;
  editable: boolean;
  initalValue?: string;
  onChange: (value: string) => void;
}

export const RadioMeasureScale: FC<RadioMeasureScaleProps> = ({ initalValue, choices, editable, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <FormLabel id="tagging-scale-group">Measure Scale</FormLabel>
      <RadioGroup
        aria-labelledby="tagging-scale-group"
        name="controlled-radio-buttons-group"
        value={initalValue}
        onChange={handleChange}
      >
        {choices.map((c) => (
          <FormControlLabel key={c} value={c} label={c} disabled={!editable} control={<Radio />} />
        ))}
      </RadioGroup>
    </>
  );
};
