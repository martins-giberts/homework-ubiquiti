import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProductCard } from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {};
