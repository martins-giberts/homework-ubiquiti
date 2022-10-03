import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Example",
  // component: Example,
} as ComponentMeta<React.FC>;

const Template: ComponentStory<React.FC> = (args) => (
  <div {...args}>Hello World</div>
);

export const Default = Template.bind({});
Default.args = {};
