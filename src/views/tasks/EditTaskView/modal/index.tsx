import React, { ChangeEvent, FC, useState } from "react";

import { Button, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { Dataset, Measure, TaskDefinition, TaskProgress } from "model";
import { randomString, Sequence2IdMap } from "utilities";

import { DatasetSelect } from "./DatasetSelect";
import { MeasureSelect } from "./MeasureSelect";

const style = {
  position: "absolute" as const,
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

export interface TaskModalProps {
  measures: Sequence2IdMap<Measure>;
  datasets: Sequence2IdMap<Dataset>;
  initialData?: TaskDefinition;
  onSave: (data: TaskDefinition) => void;
  onClose: () => void;
}

export const TaskModal: FC<TaskModalProps> = ({
  measures, datasets, initialData, onSave, onClose,
}) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [measureIds, setMeasureIds] = useState<Array<string>>([]);
  const [datasetId, setDatasetId] = useState<string>("");

  const [isReset, setIsReset] = useState(false);

  const isCreate = initialData === undefined;

  const onDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onSaveClick = () => {
    // const totalNum = datasets[datasetId].dialogues.length;

    // const annotations = isReset === true? [] : (initialData !== undefined)? initialData.annotations : [];

    onSave({
      id: initialData?.id ?? randomString(),
      title,
      description,
      measureIds: [],
      datasetId: "",
    });
    onClose();
  };

  return (
    <Modal open aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
          noValidate
          autoComplete="off"
        >
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
          <Typography>
            Select Meausures...
          </Typography>
          <MeasureSelect measures={measures} measureIds={measureIds} setMeasureIds={setMeasureIds} setIsReset={setIsReset} />
          <Typography>
            Select Dataset
          </Typography>
          <DatasetSelect datasets={datasets} datasetId={datasetId} setDatasetId={setDatasetId} setIsReset={setIsReset} />
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
