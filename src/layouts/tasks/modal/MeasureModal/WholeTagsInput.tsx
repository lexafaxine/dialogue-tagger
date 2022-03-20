import React, { FC } from "react";
import { Typography } from "@mui/material";
import { MultiInput } from "components/MultiInput";
import { TagGroup } from "store/measureSlice";

interface WholeTagsInputProps {
  initialValue: TagGroup[];
  onChange: (tags: TagGroup) => void;
}

export const WholeTagsInput: FC<WholeTagsInputProps> = ({ initialValue, onChange }) => {
  return (
    <>
      <Typography>Dialogue Tags</Typography>
      <MultiInput initialValue={initialValue[0]} onChange={onChange}></MultiInput>
    </>
  );
};
