import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import StartUpBuddy from ".";

export default {
  title: "Components/StartUpBuddy",
  component: StartUpBuddy,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof StartUpBuddy>;

const Template: ComponentStory<typeof StartUpBuddy> = (args) => (
  <StartUpBuddy {...args} />
);

export const Basic = Template.bind({});
