import React, { FC } from 'react';

import { Breadcrumb, IBreadcrumbItem, IDividerAsProps } from '@fluentui/react/lib/Breadcrumb';
import { Label, ILabelStyles } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { Announced } from '@fluentui/react/lib/Announced';
import { DetailsList, DetailsListLayoutMode, Selection, SelectionMode, IColumn } from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { mergeStyleSets } from '@fluentui/react/lib/Styling';
import { TooltipHost } from '@fluentui/react';
import { ScrollablePaneDetailsListExample } from './customList';
const labelStyles: Partial<ILabelStyles> = {
  root: { margin: '10px 0', selectors: { '&:not(:first-child)': { marginTop: 24 } } },
};

const items: IBreadcrumbItem[] = [
  { text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 1', key: 'f1', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 2', key: 'f2', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 3', key: 'f3', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 4 (non-clickable)', key: 'f4' },
  { text: 'Folder 5', key: 'f5', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 6', key: 'f6', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 7', key: 'f7', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 8', key: 'f8', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 9', key: 'f9', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 10', key: 'f10', onClick: _onBreadcrumbItemClicked },
  { text: 'Folder 11', key: 'f11', onClick: _onBreadcrumbItemClicked, isCurrentItem: true },
];

const BreadcrumbBasicExample: React.FunctionComponent = () => {
  return (
    <div>
      <Label styles={labelStyles}>With items rendered as buttons and tab navigation control</Label>
      <Breadcrumb
        items={items}
        maxDisplayedItems={5}
        ariaLabel="With items rendered as buttons and tab navigation control"
        overflowAriaLabel="More links"
        focusZoneProps={{ handleTabKey: 1 }}
      />
    </div>
  );
};

function _onBreadcrumbItemClicked(ev?: React.MouseEvent<HTMLElement>, item?: IBreadcrumbItem): void {
  console.log(``);
}


export const MainContent: FC = () => {
  return <div>
    <BreadcrumbBasicExample></BreadcrumbBasicExample>
    <ScrollablePaneDetailsListExample></ScrollablePaneDetailsListExample>
  </div>
}