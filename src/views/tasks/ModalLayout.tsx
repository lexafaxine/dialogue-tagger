import React, { FC } from "react";

import { Box, Modal } from "@mui/material";

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

export const ModalLayout: FC = ({ children }) => (
  <Modal open aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style}>
      {children}
    </Box>
  </Modal>
);
