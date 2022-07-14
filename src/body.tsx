import React, { FC } from 'react';
import './App.css';

import { DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import { NavBasicExample } from './sidenav';
import { MainContent } from './mainContent';

export const Body: FC<React.HTMLAttributes<HTMLElement>> = () => {
  return <Stack className='full-height full-width' horizontal={true}>
    <NavBasicExample></NavBasicExample>
    <MainContent/>
  </Stack>
}