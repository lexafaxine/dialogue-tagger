import React, { FC } from "react";

import { Typography } from "@mui/material";

import { MultiInput } from "components/MultiInput";
import { TagGroup } from "model";

interface TurnByTurnTagsInputProps {
  initialValue: TagGroup[];
  onChange: (i: number, tags: string[]) => void;
}

export const TurnByTurnTagsInput: FC<TurnByTurnTagsInputProps> = ({ initialValue, onChange }) => (
  <>
    <Typography>Dialogue Tags1</Typography>
    <MultiInput initialValue={initialValue[0].map((r) => r.name)} onChange={(tags) => onChange(0, tags)} />
    <Typography>Dialogue Tags2</Typography>
    <MultiInput initialValue={initialValue[1].map((r) => r.name)} onChange={(tags) => onChange(1, tags)} />
  </>
);
