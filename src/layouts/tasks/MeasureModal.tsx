import * as React from 'react';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Chip, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, Stack, StepIconClasskey, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/Appstate';
import { MissionDefinition, MissionState, MISSIONS_TYPE } from 'store/MissionsReducer';
import { Description } from '@mui/icons-material';
import { boolean } from 'yup';
import { Measure, Tags } from 'store/MeasureListReducer';
import { useMeasureList } from '.';
import { MeasureModalProps } from './MasterModal';
import { string } from 'prop-types';
import { TagsController } from './TagsController';

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
  setScale: (scale: "turnbyturn" | "whole") => void;
  isAdd: boolean;
}

const RadioMeasureScale: React.FC<RadioMeasureScaleProps> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = ((event.target as HTMLInputElement).value === "whole") ? "whole" : "turnbyturn"
    props.setScale(newScale);
  };
  if (props.isAdd === true) {
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
            value="whole"
            control={<Radio />}
            label="whole dialogue"
          />
          <FormControlLabel
            value="turnbyturn"
            control={<Radio />}
            label="tunr-by-turn"
          />
        </RadioGroup>
      </FormControl>
    );
  } else {
    return (
      <FormControl>
        <FormLabel id="showScale">Measure Scale</FormLabel>
        <RadioGroup
          row
          aria-labelledby="showScale"
          name="showScale"
          value={props.scale}
        >
          <FormControlLabel
            value="whole"
            disabled = {props.scale === "turnbyturn"}
            control={<Radio />}
            label="whole dialogue"
          />
          <FormControlLabel
            value="turnbyturn"
            disabled = {props.scale === "scale"}
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl>
    );
  }
};

export const MeasureModal = (props: MeasureModalProps) => {

  // dialogue tagging scale
  const [scale, setScale] = React.useState(props.initialData.type);

  // base information
  const [title, setTitle] = React.useState(props.initialData.title);
  const [description, setDescription] = React.useState(props.initialData.description);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
    // console.log(`Change Description to ${description}`);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    // console.log(`Change title to ${title}`);
  };

  // tags
  const [Dtags, setDtags] = React.useState<Tags>([]);
  const [Ttags, setTtags] = React.useState<Array<Tags>>([]);

  // Add Button

  const onClickAdd = () => {
    // To do a VERIFY

    let measure: Measure;
    if (scale === "whole") {
      measure = {
        title: title,
        description: description,
        type: "whole",
        tags: Dtags
      }
    } else {
      measure = {
        title: title,
        description: description,
        type: "turnbyturn",
        tags: Ttags
      }
    }

    props.onAdd(measure);
  }

  return (
    <div>
      <Modal
        open={true}
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
              defaultValue={title}
              onChange={handleTitleChange}
              disabled={!props.isAdd}
              focused
            />
            <br />
            <TextField
              label="Description"
              color="secondary"
              multiline
              rows={4}
              defaultValue={description}
              onChange={handleDescriptionChange}
              disabled={!props.isAdd}
              focused
            />
            <br />
            <RadioMeasureScale
              scale={scale}
              setScale={setScale} isAdd={props.isAdd}
            ></RadioMeasureScale>
            <br />
            {
              (scale === "whole")? (
                <TagsController scale={scale} tags={Dtags} setTags={setDtags} isAdd={props.isAdd}></TagsController>
              ) : (
                <TagsController scale={scale} tags={Ttags} setTags={setTtags} isAdd={props.isAdd}></TagsController>
              )
            }
          </Box>
          <br />
          <Box sx={{ pl: 1 }}>
            {
              (props.isAdd === true) ? (
                <Stack direction="row" spacing={1}>
                  <Button variant="contained" size="small" onClick={onClickAdd}>
                    Add
                  </Button>
                  <Button variant="contained" size="small" onClick={props.onClose}>
                    Close
                  </Button>
                </Stack>

              ) : (
                <Button variant="contained" size="small" onClick={props.onClose}>
                  Close
                </Button>
              )
            }

          </Box>
        </Box>
      </Modal>
    </div>
  );
};