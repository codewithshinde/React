import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Login from ".";

export default {
  title: "Components/Login",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Basic = Template.bind({});
