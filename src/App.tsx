import React, { FC } from 'react';
import './App.css';

import { DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import { NavBasicExample } from './sidenav';
import { Header } from './header';


const MainContent: FC = () => <section style={{"width": "100%"}}>


</section>

const Body: FC<React.HTMLAttributes<HTMLElement>> = () => {
  return <Stack className='full-height full-width' horizontal={true}>
    <NavBasicExample></NavBasicExample>
    <MainContent/>
  </Stack>
}

const Footer: FC<React.HTMLAttributes<HTMLElement>> = () => {
  return <></>
}

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
    height: "100%",
  },
};

const innerStackTokens: IStackTokens = {
  childrenGap: 0,
  padding: 0,
};

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    height: '48px',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: 'flex',
    justifyContent: 'center',
    
  },
};

const BodyStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    height: '100%',
    background: DefaultPalette.white,
    color: DefaultPalette.white,
    display: 'flex',
    justifyContent: 'center',
  },
}

function App() {
  return (
    <div className="App" style={{"height": '100%'}}>
      <Stack styles={stackStyles} tokens={innerStackTokens} verticalAlign="space-between">
        <Stack.Item styles={stackItemStyles}>
          <Header></Header>
        </Stack.Item>
        <Stack.Item styles={BodyStyles}>
          <Body></Body>
        </Stack.Item>
        <Stack.Item styles={stackItemStyles}>
          <Footer></Footer>
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default App;
