import styled from "styled-components";
import { Device } from "../../services/api";
import { tokens } from "../../tokens";
import { DeviceImage } from "./DeviceImage";
import { Text, TextStyles, TextTypes } from "../Text";

export type ProductCardProps = {
  device: Device;
};

export const ProductCard: React.FC<ProductCardProps> = ({ device }) => (
  <Container>
    <DeviceImage imageId={device.icon.id} name={device.product.name} />
    <Text textStyle={TextStyles.Secondary}>{device.line.name}</Text>
    <Text textType={TextTypes.Title}>{device.product.name}</Text>
  </Container>
);

const Container = styled.div`
  padding: ${tokens.spacingMediumPx};
  background: ${tokens.colorUiLightGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${tokens.spacingBorderRadiusPx};
`;
