import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Wrapper } from "./Wrapper";

export default {
  title: "Components/Wrapper",
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "This is wrapper",
};
