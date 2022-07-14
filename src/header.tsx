import React, { FC } from 'react';
import './App.css';

import { ColorClassNames, FontIcon, IPersonaSharedProps, mergeStyles, Persona, PersonaSize, SearchBox, Stack } from "@fluentui/react";
import { Text } from '@fluentui/react/lib/Text';

const examplePersona: IPersonaSharedProps = {
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
};

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: '0 25px',
});

export const Header: FC<React.HTMLAttributes<HTMLElement>> = () => {
  return <div style={{"height": "3rem", "maxHeight": "100%"}} className={`${ColorClassNames.blueBackground}`}>
    <Stack tokens={{"maxHeight": "100%", padding: "0.5rem"}} horizontal={true} verticalFill={true} verticalAlign={"center"} horizontalAlign={"space-between"}>
      <div>
        <Text>ConfBench</Text>
      </div>
    <SearchBox placeholder="Search" width="50%" underlined={true} styles={{"root": {"background": ColorClassNames.whiteTranslucent40Background, opacity: "80%", "width": "40%"}}} />
    <Stack horizontal={true}>
      <div>
      <FontIcon aria-label="Compass" iconName="CompassNW" className={iconClass} />
      </div>
      
      <Persona
        {...examplePersona}
        text="Annie Lindqvist (Available)"
        size={PersonaSize.size32}
        imageAlt="Annie Lindqvist, status is online"
      />
    </Stack>
    </Stack>
  </div>
}