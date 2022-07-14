import React from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, DefaultPalette, IStackItemStyles } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import { Footer } from './footer';
import { Header } from './header';
import { Body } from './body';


const stackTokens: IStackTokens = { childrenGap: 0, padding: 0 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    textAlign: 'center',
    color: '#605e5c',
  },
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


export const App: React.FunctionComponent = () => {
  return (
    <Stack verticalAlign="space-between" verticalFill styles={stackStyles} tokens={stackTokens}>
      <Stack.Item styles={stackItemStyles}>
        <Header></Header>
      </Stack.Item>
      <Stack.Item styles={BodyStyles}>
        <Body></Body>
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
        <Header></Header>
      </Stack.Item>
    </Stack>
  );
};
