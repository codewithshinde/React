import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PersonalInfo from '.';

export default {
    title: 'Components/PersonalInfo',
    component: PersonalInfo,
  } as ComponentMeta<typeof PersonalInfo>;

  const Template: ComponentStory<typeof PersonalInfo> = (args) => <PersonalInfo {...args} />;

  export const Basic = Template.bind({});