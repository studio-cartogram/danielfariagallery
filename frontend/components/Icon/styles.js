import styled from "styled-components";
import scale from "../../styles/scale";

const iconSizes = {
  sm: scale.scaleDuo,
  md: scale.scaleTrio,
  lg: scale.scaleQuin
};

const StyledIcon = styled.i`
  display: inline-block;
  vertical-align: middle;
  align-self: center;
  fill: currentColor;
`;

export { StyledIcon };
