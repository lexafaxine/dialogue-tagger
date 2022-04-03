import { Stack, Chip } from "@mui/material";
import React, { FC } from "react";

interface TagListPrpos {
  tags: Array<string>;
}

export const TagList: FC<TagListPrpos> = ({ tags }) => {
  return (
    <Stack spacing={1} direction="row">
      {tags.map((tag) => {
        return (
          <Chip
            clickable={true}
            onClick={() => {
              console.log({ tag });
            }}
            label={tag}
          />
        );
      })}
    </Stack>
  );
};