import * as React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MDInput from "components/MDInput";
import { Input } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'store/Appstate';
import { MissionDefinition, MissionState, MISSIONS_TYPE } from 'store/MissionsReducer';
import { Description } from '@mui/icons-material';

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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



// export function EditMissionModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
//     const [value, setValue] = React.useState(0);


//     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//         setValue(newValue);
//     };

//     return (
// <div>
//     <Button onClick={handleOpen}>Open modal</Button>
//     <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//     >
//         <Box sx={style}>
//             <Input />
//             <Input />
//             <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                 <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//                     <Tab label="Item One" {...a11yProps(0)} />
//                     <Tab label="Item Two" {...a11yProps(1)} />
//                     <Tab label="Item Three" {...a11yProps(2)} />
//                 </Tabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//                 Item One
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Item Two
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Item Three
//             </TabPanel>

//         </Box>
//     </Modal>
// </div>
//     );
// }

export const EditMissionModal = () => {
  const missions = useSelector((state: AppState) => state.missions);
  const [open, setOpen] = React.useState(false);

  const fakeMission = {
    title: 'xxxx',
    description: 'yyy'
  };
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    dispatch({
      type: MISSIONS_TYPE,
      payload: {
        missions: [fakeMission]
      }
    })
  };

  const handleClose = () => setOpen(false);

  const mission = missions.missions[0];
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {mission?.title}
          </div>
          <div>
            {mission?.description}
          </div>
        </Box>
      </Modal>
    </div>
  )

};
