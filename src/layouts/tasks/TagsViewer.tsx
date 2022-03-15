import Typography from '@mui/material/Typography';
import { Chip, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, Stack, StepIconClasskey, TextField } from '@mui/material';
import React from 'react';
import { Tags } from 'store/MeasureListReducer';


type TagsViewScale = "whole" | "turnbyturn";


interface BaseTagViewerProps {
  scale: TagsViewScale;
  DTags: string;
  CTags: string;
  HTags: string;
  isAdd: boolean;
}

interface DTagsViewerProps extends BaseTagViewerProps {
  scale: "whole";
  tags: Tags;
}


interface TTagsViewerProps extends BaseTagViewerProps {
  scale: "turnbyturn";
  tags: Array<Tags>;
}


export const TagsViewer: React.FC<DTagsViewerProps | TTagsViewerProps> = (props) => {

  if (props.isAdd === true) {

    if (props.scale === "whole") {
      const tags = props.DTags.split(";");

      const display_tags = tags.slice(0,-1);

      return (
        <Stack direction="row" spacing={1}>
          {display_tags.map((tag, i) => {
            return <Chip label={tag} variant="outlined" key={i}></Chip>;
          })}
        </Stack>
      );
    } else {

      const cTags: Array<string> = props.CTags.split(";")
      const hTags: Array<string> = props.HTags.split(";");
      // console.log(`split HTags: ${hTags}`);

      return (
        <>
          <Typography>customer tags</Typography>
          <Stack direction="row" spacing={1}>
            {cTags.map((tag) => {
              return <Chip label={tag} variant="outlined" key={tag}></Chip>;
            })}
          </Stack>
          <Typography>helpdesk tags</Typography>
          <Stack direction="row" spacing={1}>
            {hTags.map((tag) => {
              return <Chip label={tag} variant="outlined" key={tag}></Chip>;
            })}
          </Stack>
        </>
      );
    }
  } else {

    if (props.scale === "turnbyturn") {
      const cTags = props.tags[0];
      const hTags = props.tags[1];

      return (
        <>
          <Typography>customer tags</Typography>
          <Stack direction="row" spacing={1}>
            {cTags.map((tag) => {
              return <Chip label={tag} variant="outlined" key={tag}></Chip>;
            })}
          </Stack>
          <Typography>helpdesk tags</Typography>
          <Stack direction="row" spacing={1}>
            {hTags.map((tag) => {
              return <Chip label={tag} variant="outlined" key={tag}></Chip>;
            })}
          </Stack>
        </>
      )

    } else {
      const tags = props.tags;

      return (
        <Stack direction="row" spacing={1}>
          {tags.map((tag, i) => {
            return <Chip label={tag} variant="outlined" key={i}></Chip>;
          })}
        </Stack>
      )
    }

  };
}