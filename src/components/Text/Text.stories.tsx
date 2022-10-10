import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text, TextStyles, TextTypes } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const templateText =
  "Think of something crazy, or if that's too taxing just throw random adjectives and nouns together.";

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...{ children: templateText, ...args }} />
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  textStyle: TextStyles.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  textStyle: TextStyles.Secondary,
};

export const TitlePrimary = Template.bind({});
TitlePrimary.args = {
  textType: TextTypes.Title,
  textStyle: TextStyles.Primary,
};

export const TitleSecondary = Template.bind({});
TitleSecondary.args = {
  textType: TextTypes.Title,
  textStyle: TextStyles.Secondary,
};
