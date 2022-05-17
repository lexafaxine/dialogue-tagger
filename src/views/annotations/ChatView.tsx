/* eslint-disable import/no-unresolved */
import React, { FC } from "react";

import {
  ChatContainer,
  Message,
  MessageList,
// eslint-disable-next-line import/no-unresolved
} from "@chatscope/chat-ui-kit-react";

import { TagGroup } from "models";

import { MessageWithTags } from "./MessageWithTags";

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

export const ChatView: FC = () => {
  console.log(Message);
  // get tag list
  // const tags: TagGroup = [{"id": "1", "name":"A"}, {"id": 2, "name":"BB"}, "ccc", "DDDD", "A", "BB"];

  const tagNames = ["A", "BB", "ccc", "DDDD", "A", "BB"];

  const tags: TagGroup = [];

  tagNames.forEach((tag:string) => {
    tags.push(
      {
        id: tag,
        name: tag,
      },
    );
  });
  return (
    <ChatContainer>
      <MessageList>
        <MessageWithTags
          message="helllooooohelllooooohelllooooohelllooooohelllooooohelllooooohelllooooo"
          direction="incoming"
          tags={tags}
        />
        <MessageWithTags
          message="helllooooohelllooooohelllooooohelllooooohelllooooohelllooooohelllooooo"
          direction="outgoing"
          tags={tags}
        />
        <MessageWithTags message="helllooooooo" direction="incoming" tags={tags} />
        <MessageWithTags message="helllooooooo" direction="outgoing" tags={tags} />
      </MessageList>
    </ChatContainer>
  );
};
