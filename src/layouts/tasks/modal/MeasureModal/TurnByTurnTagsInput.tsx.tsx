import { Typography } from "@mui/material";
import { MultiInput } from "components/MultiInput";
import React, { FC } from "react";
import { TagGroup } from "store/measureSlice";

interface TurnByTurnTagsInputProps {
  initialValue: TagGroup[];
  onChange: (i: number, tags: TagGroup) => void;
}

export const TurnByTurnTagsInput: FC<TurnByTurnTagsInputProps> = ({ initialValue, onChange }) => {
  return (
    <>
      <Typography>Dialogue Tags1</Typography>
      <MultiInput initialValue={initialValue[0]} onChange={(tags) => onChange(0, tags)}></MultiInput>
      <Typography>Dialogue Tags2</Typography>
      <MultiInput initialValue={initialValue[1]} onChange={(tags) => onChange(1, tags)}></MultiInput>
    </>
  );
};
