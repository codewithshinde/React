import { ComponentStory, ComponentMeta } from '@storybook/react';

import Quiz from '.';

export default {
    title: 'Components/Quiz',
    component: Quiz,
} as ComponentMeta<typeof Quiz>;

const Template: ComponentStory<typeof Quiz> = (args) => <Quiz {...args} />;

export const Basic = Template.bind({});