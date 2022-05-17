import React, { FC } from "react";

import { Chip, Stack } from "@mui/material";

import { TagGroup } from "models";

interface TagListPrpos {
  tags: TagGroup;
}

export const TagList: FC<TagListPrpos> = ({ tags }) => (
  <Stack spacing={1} direction="row">
    {tags.map((tag) => (
      <Chip
        clickable
        onClick={() => {
          console.log({ tag });
        }}
        label={tag}
      />
    ))}
    {tags}
  </Stack>
);
