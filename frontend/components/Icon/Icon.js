import React from 'react';
import propTypes from 'prop-types';
import {StyledIcon} from './styles';
import * as icons from '../../svgs';

function Icon({icon, ...rest}) {
  const Svg = icons[icon];
  if (!Svg) {
    return null;
  }

  return <StyledIcon {...rest} dangerouslySetInnerHTML={{__html: Svg()}} />;
}

Icon.propTypes = {
  size: propTypes.oneOf(['sm', 'md', 'lg']),
  icon: propTypes.oneOf(Object.keys(icons)),
};

Icon.defaultProps = {
  size: 'md',
};

export default Icon;
