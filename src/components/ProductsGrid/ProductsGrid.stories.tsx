import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { tokens } from "../../tokens";
import { ProductsGrid } from "./ProductsGrid";

const TemplateCard = styled.div`
  background-color: ${tokens.colorUiLightBlue};
  padding: 2px 10px;
`;

export default {
  title: "Components/ProductsGrid",
  component: ProductsGrid,
} as ComponentMeta<typeof ProductsGrid>;

const Template: ComponentStory<typeof ProductsGrid> = (args) => (
  <ProductsGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: Array.from(Array(40).keys()).map((key) => (
    <TemplateCard>Item {key}</TemplateCard>
  )),
};
