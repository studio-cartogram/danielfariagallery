import { css } from "styled-components";

const iconSizes = {
  xxs: "4px",
  xs: "8px",
  sm: "16px",
  md: "24px",
  lg: "40px",
  xl: "56px",
  full: "100%"
};

const styles = ({ variant, color, ...rest }) => css`
  display: inline-block;
  vertical-align: middle;
  align-self: center;
  fill: currentColor;
`;

export { styles };
