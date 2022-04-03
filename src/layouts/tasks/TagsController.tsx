import React from "react";

import { Chip, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

import { TagGroup } from "model";

type TagGroupControllerScale = "whole" | "turnbyturn";

interface BaseTagGroupControllerProps {
  scale: TagGroupControllerScale;
  isAdd: boolean;
}

interface DTagGroupControllerProps extends BaseTagGroupControllerProps {
  scale: "whole";
  TagGroup: TagGroup;
  setTagGroup: (TagGroup: TagGroup) => void;
}

interface TTagGroupControllerProps extends BaseTagGroupControllerProps {
  scale: "turnbyturn";
  TagGroup: Array<TagGroup>;
  setTagGroup: (TagGroup: Array<TagGroup>) => void;
}

interface TagGroupViewerProps {
  TagGroup: TagGroup;
}

const TagGroupViewer = (props: TagGroupViewerProps) => (
  <Stack direction="row" spacing={1}>
    {props.TagGroup.map((tag, i) => <Chip label="tag" variant="outlined" key={i} />)}
  </Stack>
);

export const TagGroupController = (props: DTagGroupControllerProps | TTagGroupControllerProps) => {
  const [DTagGroup, setDTagGroup] = React.useState<Map<string, string>>(new Map());
  const [CTagGroup, setCTagGroup] = React.useState<Map<string, string>>(new Map());
  const [HTagGroup, setHTagGroup] = React.useState<Map<string, string>>(new Map());

  if (props.isAdd === true) {
    if (props.scale === "whole") {
      return (
        <>
          <Typography>Dialogue TagGroup</Typography>
          {/* <TagGroupAdder TagGroup={DTagGroup} setTagGroup={(newData) => {
            props.setTagGroup(Array.from(newData.values()))
          }}></TagGroupAdder> */}
          {/* < onChange={(newData) => {
            props.setTagGroup(Array.from(newData.values()))
          }}></TagGroupAdder> */}
        </>
      );
    }
    // props.setTagGroup([[...CTagGroup.values()],[...HTagGroup.values()]]);
    // props.setTagGroup([])
    return (
      <>
        <Typography>Customer TagGroup</Typography>
        {/* <TagGroupAdder TagGroup={CTagGroup} setTagGroup={setCTagGroup}></TagGroupAdder> */}
        <Typography>Helpdesk TagGroup</Typography>
        {/* <TagGroupAdder TagGroup={HTagGroup} setTagGroup={setHTagGroup}></TagGroupAdder> */}
      </>
    );
  }
  // a display component
  if (props.scale === "whole") {
    return <TagGroupViewer TagGroup={props.TagGroup} />;
  }
  return (
    <>
      <Typography>Customer TagGroup</Typography>
      <TagGroupViewer TagGroup={props.TagGroup[0]} />
      <Typography>Helpdesk TagGroup</Typography>
      <TagGroupViewer TagGroup={props.TagGroup[1]} />
    </>
  );
};
