import React, { FC } from "react";

import { Typography } from "@mui/material";

import { MultiInput } from "components/MultiInput";
import { TagGroup } from "models";

interface WholeTagsInputProps {
  initialValue: TagGroup[];
  onChange: (tags: string[]) => void;
}

export const WholeTagsInput: FC<WholeTagsInputProps> = ({ initialValue, onChange }) => (
  <>
    <Typography>Dialogue Tags</Typography>
    <MultiInput initialValue={initialValue[0].map((r) => r.name)} onChange={onChange} />
  </>
);
