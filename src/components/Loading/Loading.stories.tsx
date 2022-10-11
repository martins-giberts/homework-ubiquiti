import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Wrapper, WrapperTypes } from "../Wrapper";
import { Loading } from "./Loading";

export default {
  title: "Components/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => (
  <Loading {...args} />
);

const TemplateWithWrapper: ComponentStory<typeof Loading> = (args) => (
  <Wrapper wrapperType={WrapperTypes.FullScreen}>
    <Loading {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};

export const WithWrapper = TemplateWithWrapper.bind({});
WithWrapper.args = {};
