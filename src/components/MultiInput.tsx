import React, { useState } from "react";

import {
  Box, Button, Grid, TextField,
} from "@mui/material";

import { randomString } from "utilities";

interface MultiInputProps {
  initialValue?: Array<string>;
  onChange: (values: Array<string>) => void;
}

export const MultiInput = ({
  initialValue, onChange,
}: MultiInputProps) => {
  const [tags, setTags] = useState<Map<string, string>>(new Map((initialValue ?? []).map((r) => [randomString(), r])));

  const onClickAdd = () => {
    setTags(new Map([...Array.from(tags), [randomString(), ""]]));
  };

  const handleChange = (key: string, value: string) => {
    const newMap = new Map(Array.from(tags));
    newMap.set(key, value);
    setTags(newMap);
    onChange(Array.from(newMap.values()));
  };

  const onDeleteBuilder = (targetKey: string) => () => {
    const newMap = new Map(Array.from(tags).filter(([k, _]) => k !== targetKey));
    setTags(newMap);
    onChange(Array.from(newMap.values()));
  };

  return (
    <Box sx={{ width: "100%" }}
    >
      <Button onClick={onClickAdd}>Add Tags</Button>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1, sm: 2, md: 3,
        }}
      >
        {Array.from(tags).map(([key, value]) => (
          <Grid key={key} item xs={6} pb="1111">
            <TextField
              label=""
              color="secondary"
              size="small"
              id={key}
              key={key}
              defaultValue={value}
              onChange={(e) => handleChange(key, e.target.value)}
            />
            <Button onClick={onDeleteBuilder(key)}>delete</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
