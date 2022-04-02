import React, { ChangeEvent, FC, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { WholeTagsInput } from "./WholeTagsInput";
import { RadioMeasureScale } from "./MeasureTypeRadio";
import { Button, Stack, TextField } from "@mui/material";
import { TurnByTurnTagsInput } from "./TurnByTurnTagsInput.tsx";
import { randomString } from "utilities";
import { Measure, MeasureType, TagGroup } from "model";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxHeight: "75%",
  minHeight: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

export interface MeasureModalProps {
  initialData?: Measure;
  onSave: (data: Measure) => void;
  onClose: () => void;
}

export const MeasureModal: FC<MeasureModalProps> = ({ initialData, onClose, onSave }) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [type, setType] = useState<MeasureType | undefined>(initialData?.type);
  const [tags, setTags] = useState<TagGroup[]>(initialData?.tags ?? []);

  const isCreate = initialData === undefined;

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSaveClick = () => {
    if (type === undefined) {
      return;
    }
    onSave({
      id: initialData?.id ?? randomString(),
      title,
      description,
      type,
      tags,
    });
    onClose();
  };

  return (
    <Modal open={true} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "50ch" } }} noValidate autoComplete="off">
          <TextField
            label="Title"
            color="secondary"
            size="small"
            defaultValue={title}
            onChange={onTitleChange}
            disabled={initialData !== undefined}
          />
          <TextField
            label="Description"
            color="secondary"
            multiline
            rows={4}
            defaultValue={description}
            onChange={onDescriptionChange}
          />
          <RadioMeasureScale
            choices={["whole", "turnbyturn"]}
            initalValue={type}
            editable={isCreate}
            onChange={(value) => {
              setType(value as MeasureType);
            }}
          />
          {type === "whole" ? (
            <WholeTagsInput initialValue={tags} onChange={(tags) => setTags([])} />
          ) : type === "turnbyturn" ? (
            <TurnByTurnTagsInput
              initialValue={tags}
              onChange={(i, tags) =>
                setTags((oldTags) => {
                  const newTags = [...oldTags];
                  // newTags[i] = tags;
                  return newTags;
                })
              }
            />
          ) : (
            <></>
          )}
        </Box>
        <Box sx={{ pl: 1 }}>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" size="small" onClick={onSaveClick}>
              Save
            </Button>
            <Button variant="contained" size="small" onClick={onClose}>
              Close
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};
