import React, { FC } from "react";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

interface EnhancedTableToolbarProps {
  title: string;
  numSelected: number;
  onAdd: () => void;
  onDelete: () => void;
}

export const EnhancedTableToolbar: FC<EnhancedTableToolbarProps> = ({
  title, numSelected, onAdd, onDelete,
}) => (
  <Toolbar
    sx={{
      pl: { sm: 2 },
      pr: {
        xs: 1,
        sm: 1,
      },
      ...(numSelected > 0 && { bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity) }),
    }}
  >
    {numSelected > 0 ? (
      <Typography
        sx={{ flex: "1 1 100%" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected}
        {" "}
        selected
      </Typography>
    ) : (
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
    )}
    {numSelected > 0 ? (
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon onClick={onDelete} />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Add">
        <IconButton>
          <AddIcon onClick={onAdd} />
        </IconButton>
      </Tooltip>
    )}
  </Toolbar>
);
