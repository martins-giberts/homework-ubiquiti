import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Device } from "../../services/api";
import { ProductCard } from "./ProductCard";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const templateDevice: Partial<Device> = {
  icon: {
    id: "0da32da2-b540-4b03-92c0-4ee5e25da040",
    resolutions: [],
  },
  product: {
    abbrev: "Product name",
    name: "Product name",
  },
  line: {
    id: "Product line",
    name: "Product line",
  },
};

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  device: templateDevice as Device,
};
