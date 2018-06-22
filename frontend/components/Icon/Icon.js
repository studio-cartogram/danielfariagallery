import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { styles } from "./styles";
import * as icons from "../../svgs";

const StyledIcon = styled.i`
  ${styles};
`;

function Icon({ icon, ...rest }) {
  const Svg = icons[icon];
  if (!Svg) {
    return null;
  }

  return <StyledIcon {...rest} dangerouslySetInnerHTML={{ __html: Svg() }} />;
}

Icon.propTypes = {
  size: PropTypes.oneOf(["xxs", "xs", "sm", "md", "lg", "xl", "full"]),
  icon: PropTypes.oneOf(Object.keys(icons))
};

Icon.defaultProps = {
  size: "md"
};

export default Icon;
