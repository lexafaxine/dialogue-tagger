import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MDInput from "components/MDInput";
import { Chip, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, Stack, StepIconClasskey, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/Appstate';
import { MissionDefinition, MissionState, MISSIONS_TYPE } from 'store/MissionsReducer';
import { Description } from '@mui/icons-material';
import { boolean } from 'yup';
import { Measure } from 'store/MeasureListReducer';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxHeight: '75%',
  minHeight: '75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
};

interface RadioMeasureScaleProps {
  scale: string;
  setScale: (scale: string) => void;
}

interface TagsViewerProps {
  scale: string;
  DTags: string;
  CTags: string;
  HTags: string;
}

const RadioMeasureScale: React.FC<RadioMeasureScaleProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setScale((event.target as HTMLInputElement).value);
    console.log(`change tagging scale to $scale$`);
  };

  return (
    <FormControl>
      <FormLabel id="tagging-scale-group">Measure Scale</FormLabel>
      <RadioGroup
        aria-labelledby="tagging-scale-group"
        name="controlled-radio-buttons-group"
        value={props.scale}
        onChange={handleChange}
      >
        <FormControlLabel
          value="whole dialogue"
          control={<Radio />}
          label="whole dialogue"
        />
        <FormControlLabel
          value="tunr-by-turn"
          control={<Radio />}
          label="tunr-by-turn"
        />
      </RadioGroup>
    </FormControl>
  );
};

const TagsViewer: React.FC<TagsViewerProps> = (props) => {
  if (props.scale === "whole dialogue") {
    // only need DTags
    const tags: Array<string> = props.DTags.split(";");
    console.log(`split DTags: ${tags}`);

    return (
      <Stack direction="row" spacing={1}>
        {tags.map((tag) => {
          return <Chip label={tag} variant="outlined"></Chip>;
        })}
      </Stack>
    );
  } else {
    const cTags: Array<string> = props.CTags.split(";");
    console.log(`split cTags: ${cTags}`);

    const hTags: Array<string> = props.HTags.split(";");
    console.log(`split HTags: ${hTags}`);

    return (
      <>
        <Typography>customer tags</Typography>
        <Stack direction="row" spacing={1}>
          {cTags.map((tag) => {
            return <Chip label={tag} variant="outlined"></Chip>;
          })}
        </Stack>
        <Typography>helpdesk tags</Typography>
        <Stack direction="row" spacing={1}>
          {hTags.map((tag) => {
            return <Chip label={tag} variant="outlined"></Chip>;
          })}
        </Stack>
      </>
    );
  }
};

export const MeasureModal = () => {
  // modal controller
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // dialogue tagging scale
  const [scale, setScale] = React.useState("whole dialogue");

  // base information
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    console.log(`Change Description to ${description}`);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    console.log(`Change title to ${title}`);
  };

  // tags
  const [DTags, setDTags] = React.useState("");
  const [CTags, setCTags] = React.useState("");
  const [HTags, setHTags] = React.useState("");

  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "whole") {
      setDTags(event.target.value);
      console.log(`set dialogue tags as ${event.target.value}`);
    }

    if (event.target.id === "customer") {
      setCTags(event.target.value);
      console.log(`set customer tags as ${event.target.value}`);
    }

    if (event.target.id === "helpdesk") {
      setHTags(event.target.value);
      console.log(`set helpdesk tags as ${event.target.value}`);
    }
  };

  // Add Button

  return (
    <div>
      <Button onClick={handleOpen}>Add Measure</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch" }
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Title"
              color="secondary"
              size="small"
              value={title}
              onChange={handleTitleChange}
              focused
            />
            <br />
            <TextField
              label="Description"
              color="secondary"
              multiline
              rows={4}
              value={description}
              onChange={handleDescriptionChange}
              focused
            />
            <br />
            <RadioMeasureScale
              scale={scale}
              setScale={setScale}
            ></RadioMeasureScale>
            <br />
            {scale === "whole dialogue" ? (
              <TextField
                label="Dialogue Tag"
                color="secondary"
                size="small"
                focused
                placeholder="Enter your tags, split by ','"
                id="whole"
                onChange={handleTagsChange}
              ></TextField>
            ) : (
              <>
                <TextField
                  label="Customer Tags"
                  color="secondary"
                  size="small"
                  focused
                  placeholder="Enter your customer tags, split by ','"
                  id="customer"
                  onChange={handleTagsChange}
                ></TextField>
                <br />
                <TextField
                  label="Helpdesk Tags"
                  color="secondary"
                  size="small"
                  focused
                  placeholder="Enter your helpdesk tags, split by ','"
                  id="helpdesk"
                  onChange={handleTagsChange}
                ></TextField>
              </>
            )}
            <br />
            <TagsViewer
              scale={scale}
              DTags={DTags}
              CTags={CTags}
              HTags={HTags}
            ></TagsViewer>
          </Box>
          <br />
          <Box sx={{ pl: 1 }}>
            <Button variant="contained" size="small">
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};