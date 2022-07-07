import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from ".";

export default {
  title: "Components/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Basic = Template.bind({});
