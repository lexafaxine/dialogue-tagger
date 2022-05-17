/* eslint-disable import/extensions */
import React, { FC } from "react";

import { Grid } from "@mui/material";

import {
  Message,
// eslint-disable-next-line import/no-unresolved
} from "@chatscope/chat-ui-kit-react";

import { TagGroup } from "models";

import { TagList } from "./TagList";

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

interface MessageWithTagsProps {
  tags: TagGroup;
  message: string;
  direction: "outgoing" | "incoming";
}

export const MessageWithTags: FC<MessageWithTagsProps> = ({
  tags, message, direction,
}) => {
  if (direction === "incoming") {
    return (
      <>
        <Grid container spacing={4} sx={{ padding: 2 }}>
          <Grid item xs={6}>
            <Message
              model={{
                message,
                sender: "Customer",
                direction,
                position: "single",
              }}
            >
              {/* <Avatar src={joeIco} name="Joe" /> */}
            </Message>
          </Grid>
        </Grid>
        <Grid item xs={6} />
        <Grid item xs="auto">
          <TagList tags={tags} />
        </Grid>
      </>
    );
  }
  return (
    <Grid container spacing={4} sx={{ padding: 2 }}>
      <Grid item xs={6} />
      <Grid item xs={6}>
        <Message
          model={{
            message,
            sender: "Customer",
            direction,
            position: "single",
          }}
        />
      </Grid>
      <Grid item xs />
      <Grid item xs="auto">
        <TagList tags={tags} />
      </Grid>
    </Grid>
  );
};
