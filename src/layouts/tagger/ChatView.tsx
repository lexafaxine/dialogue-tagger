import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  ChatContainer,
  Message,
  MessageList,
  Avatar
} from "@chatscope/chat-ui-kit-react";
import React, { FC } from "react";
import { Grid } from "@mui/material";
import { TagList } from "./TagList";



interface MessageWithTagsProps {
  message: string;
  direction: "outgoing" | "incoming";
}

const MessageWithTags: FC<MessageWithTagsProps> = ({ message, direction }) => {
  const tags = ["A", "BB", "ccc", "DDDD", "A", "BB"];

  if (direction === "incoming") {
    return (
      <>
        <Grid container spacing={4} sx={{ padding: 2 }}>
          <Grid item xs={6}>
            <Message
              model={{
                message: message,
                sender: "Customer",
                direction: direction,
                position: "single"
              }}
            >
              {/* <Avatar src={joeIco} name="Joe" /> */}
            </Message>
          </Grid>
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs="auto">
          <TagList tags={tags}></TagList>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container spacing={4} sx={{ padding: 2 }}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Message
              model={{
                message: message,
                sender: "Customer",
                direction: direction,
                position: "single"
              }}
            />
          </Grid>
          <Grid item xs></Grid>
          <Grid item xs="auto">
            <TagList tags={tags}></TagList>
          </Grid>
        </Grid>
      </>
    );
  }
};

export const ChatView: FC = () => {
  console.log(Message);
  return (
    <ChatContainer>
      <MessageList>
        <MessageWithTags
          message="helllooooohelllooooohelllooooohelllooooohelllooooohelllooooohelllooooo"
          direction="incoming"
        />
        <MessageWithTags
          message="helllooooohelllooooohelllooooohelllooooohelllooooohelllooooohelllooooo"
          direction="outgoing"
        />
        <MessageWithTags message="helllooooooo" direction="incoming" />
        <MessageWithTags message="helllooooooo" direction="outgoing" />
      </MessageList>
    </ChatContainer>
  );
};