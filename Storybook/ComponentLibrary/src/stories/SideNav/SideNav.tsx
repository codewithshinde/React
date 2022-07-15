import * as React from 'react';
import { Nav, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = { root: { width: "100%" } };

const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'My Details',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'Timesheet',
        name: 'Timesheet',
        url: "/admin/timesheet",
        icon: 'TimeSheet'
      },
      {
        key: 'applyleave',
        name: 'Apply Leave',
        url: "/admin/leave",
        icon: 'DateTime'
      },
      {
        key: 'myleave',
        name: 'My Leave',
        url: '/admin/personalinfo',
      },
    ],
  },
  {
    name: 'Extended components',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: [
      {
        key: 'ColorPicker',
        name: 'ColorPicker',
        url: '#/examples/colorpicker',
      },
      {
        key: 'ExtendedPeoplePicker',
        name: 'ExtendedPeoplePicker',
        url: '#/examples/extendedpeoplepicker',
      },
      {
        key: 'GroupedList',
        name: 'GroupedList',
        url: '#/examples/groupedlist',
      },
    ],
  },
  {
    name: 'Utilities',
    expandAriaLabel: 'Expand Utilities section',
    collapseAriaLabel: 'Collapse Utilities section',
    links: [
      {
        key: 'FocusTrapZone',
        name: 'FocusTrapZone',
        url: '#/examples/focustrapzone',
      },
      {
        key: 'FocusZone',
        name: 'FocusZone',
        url: '#/examples/focuszone',
      },
      {
        key: 'MarqueeSelection',
        name: 'MarqueeSelection',
        url: '#/examples/marqueeselection',
      },
    ],
  },
];

const SideNav: React.FunctionComponent = () => {
  return (
    <Nav styles={navStyles} ariaLabel="Nav" groups={navLinkGroups} />
  );
};

export default SideNav;
