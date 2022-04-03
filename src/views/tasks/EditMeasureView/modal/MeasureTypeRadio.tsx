import React, { ChangeEvent, FC, useCallback } from "react";

import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface RadioMeasureScaleProps {
  choices: Array<string>;
  editable: boolean;
  initalValue?: string;
  onChange: (value: string) => void;
}

export const RadioMeasureScale: FC<RadioMeasureScaleProps> = ({
  initalValue, choices, editable, onChange,
}) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

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
