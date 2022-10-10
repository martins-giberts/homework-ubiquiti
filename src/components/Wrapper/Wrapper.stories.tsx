import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { tokens } from "../../tokens";
import { Wrapper, WrapperTypes } from "./Wrapper";

export default {
  title: "Components/Wrapper",
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

const TestComponent = styled.div`
  background: ${tokens.colorUiLightBlue};
  height: 100%;
  color: ${tokens.colorWhite};
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: ComponentStory<typeof Wrapper> = ({ children, ...args }) => (
  <Wrapper {...args}>
    <TestComponent>{children}</TestComponent>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  children: "This is Wrapper",
};

export const FullScreen = Template.bind({});
FullScreen.args = {
  children: "This is Wrapper",
  wrapperType: WrapperTypes.FullScreen,
};
