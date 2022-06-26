import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimeBar from '.';

export default {
    title: 'Components/TimeBar',
    component: TimeBar,
  } as ComponentMeta<typeof TimeBar>;

  const Template: ComponentStory<typeof TimeBar> = (args) => <TimeBar {...args} />;

  export const Basic = Template.bind({});