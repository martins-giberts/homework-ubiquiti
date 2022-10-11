import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Wrapper, WrapperTypes } from "../Wrapper";
import { ErrorMessage } from "./ErrorMessage";

export default {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

const TemplateWithWrapper: ComponentStory<typeof ErrorMessage> = (args) => (
  <Wrapper wrapperType={WrapperTypes.FullScreen}>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  error: { status: "FETCH_ERROR", error: "TypeError: Failed to fetch" },
};

export const WithWrapper = TemplateWithWrapper.bind({});
WithWrapper.args = {
  error: { status: "FETCH_ERROR", error: "TypeError: Failed to fetch" },
};
