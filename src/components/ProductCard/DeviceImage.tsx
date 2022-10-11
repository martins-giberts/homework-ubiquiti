import styled from "styled-components";
import { tokens } from "../../tokens";

export type DeviceImageProps = {
  imageId: string;
  name: string;
};

export const DeviceImage: React.FC<DeviceImageProps> = ({ imageId, name }) => (
  <Img
    src={`${process.env.REACT_APP_ICON_URL}/${imageId}_${tokens.imageWidth}x${tokens.imageHeight}.png`}
    alt={`product ${name} icon`}
  />
);

const Img = styled.img`
  display: block;
`;
