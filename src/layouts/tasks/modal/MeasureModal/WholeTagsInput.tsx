import React, { FC } from "react";
import { Typography } from "@mui/material";
import { MultiInput } from "components/MultiInput";
import { TagGroup } from "model";

interface WholeTagsInputProps {
  initialValue: TagGroup[];
  onChange: (tags: string[]) => void;
}

export const WholeTagsInput: FC<WholeTagsInputProps> = ({ initialValue, onChange }) => {
  return (
    <>
      <Typography>Dialogue Tags</Typography>
      <MultiInput initialValue={initialValue[0].map(r => r.name)} onChange={onChange}></MultiInput>
    </>
  );
};
