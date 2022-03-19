import Typography from '@mui/material/Typography';
import { Box, Button, Chip, FormControl, FormControlLabel, FormLabel, Grid, Input, Radio, RadioGroup, Stack, StepIconClasskey, TextField } from '@mui/material';
import React from 'react';
import { Tags } from 'store/MeasureListReducer';


type TagsControllerScale = "whole" | "turnbyturn";


interface BaseTagsControllerProps {
  scale: TagsControllerScale;
  isAdd: boolean;
}

interface DTagsControllerProps extends BaseTagsControllerProps {
  scale: "whole";
  tags: Tags;
  setTags: (tags: Tags) => void;
}

interface TTagsControllerProps extends BaseTagsControllerProps {
  scale: "turnbyturn";
  tags: Array<Tags>;
  setTags: (tags: Array<Tags>) => void;
}


{/* <Stack direction="row" spacing={1}>
{tags.map((tag, i) => {
  return <Chip label={tag} variant="outlined" key={i}></Chip>;
})}
</Stack> */}

interface TagsAdderProps {
  // tags: Map<string, string>;
  onChange: (tagMap: Map<string, string>) => void;
}


const randomString = () => (Math.random() + 1).toString(36).substring(7);

const TagsAdder = (props: TagsAdderProps) => {
  const [tags, setTags] = React.useState<Map<string, string>>(new Map());

  const onClickAdd = () => {
    setTags(new Map([...Array.from(tags), [randomString(), ""]]));
  };

  const handleChange = (key: string, value: string) => {
    const newMap = new Map(Array.from(tags));
    newMap.set(key, value);
    setTags(newMap);
    props.onChange(newMap)
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Button onClick={onClickAdd}>Add Tags</Button>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {Array.from(tags).map(([key, value]) => {
          return (
            <>
              <Grid item xs={6} pb="1111">
                <TextField
                  label=""
                  color="secondary"
                  size="small"
                  key={key}
                  defaultValue={value}
                  onChange={(e) => handleChange(key, e.target.value)}
                  id={key}
                  focused
                />
                <Button
                  onClick={() => {
                    setTags(
                      new Map(Array.from(tags).filter(([k, _]) => k !== key))
                    );
                  }}
                >
                  delete
                </Button>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Box>
  );
};

interface TagsViewerProps {
  tags: Tags;
}



const TagsViewer = (props: TagsViewerProps) => {

  return (
    <Stack direction="row" spacing={1}>
      {props.tags.map((tag, i) => {
        return <Chip label="tag" variant="outlined" key={i}></Chip>
      })}
    </Stack>
  )
}



export const TagsController = (props: DTagsControllerProps | TTagsControllerProps) => {
  const [DTags, setDTags] = React.useState<Map<string, string>>(new Map());
  const [CTags, setCTags] = React.useState<Map<string, string>>(new Map());
  const [HTags, setHTags] = React.useState<Map<string, string>>(new Map());


  if (props.isAdd === true) {

    if (props.scale === "whole") {
      return (
        <>
          <Typography>Dialogue Tags</Typography>
          {/* <TagsAdder tags={DTags} setTags={(newData) => {
            props.setTags(Array.from(newData.values()))
          }}></TagsAdder> */}
          <TagsAdder onChange={(newData) => {
            props.setTags(Array.from(newData.values()))
          }}></TagsAdder>
        </>
      )
    }

    else {
      // props.setTags([[...CTags.values()],[...HTags.values()]]);
      // props.setTags([])
      return (
        <>
          <Typography>Customer Tags</Typography>
          {/* <TagsAdder tags={CTags} setTags={setCTags}></TagsAdder> */}
          <Typography>Helpdesk Tags</Typography>
          {/* <TagsAdder tags={HTags} setTags={setHTags}></TagsAdder> */}
        </>
      )
    }

  } else {
    // a display component
    if (props.scale === "whole") {
      return (
        <TagsViewer tags={props.tags}></TagsViewer>
      )
    } else {
      return (
        <>
          <Typography>Customer Tags</Typography>
          <TagsViewer tags={props.tags[0]}></TagsViewer>
          <Typography>Helpdesk Tags</Typography>
          <TagsViewer tags={props.tags[1]}></TagsViewer>
        </>
      )
    }
  }


}