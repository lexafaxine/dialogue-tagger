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
import { Measure, Tags, WholeMeasure } from 'store/MeasureListReducer';
import { useMeasureList } from '.';
import { MeasureModal } from './MeasureModal';


type ModalType = "measure" | "mission" | "dataset";

export interface MeasureModalProps {
  type: "measure";
  initialData: Measure;
  // onChange: (newData: Measure) => void;
  onAdd: (newData: Measure) => void;
  isAdd: boolean;
  onClose: () => void;
}

export type MasterModalProps = MeasureModalProps | MeasureModalProps;


export const MasterModal = (props: MasterModalProps) => {

  switch (props.type) {
    case "measure":
      return (
        <MeasureModal {...props}></MeasureModal>
      )
      
    default:
      return <></>
  }



}