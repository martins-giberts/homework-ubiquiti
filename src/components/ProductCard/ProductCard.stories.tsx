import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProductCard } from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (_args) => <ProductCard />;

export const Default = Template.bind({});
Default.args = {};
