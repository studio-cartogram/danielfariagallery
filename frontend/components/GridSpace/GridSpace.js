import React from 'react';
import {StyledGridSpace} from './styles';

function GridSpace({children}) {
  return <StyledGridSpace>{children}</StyledGridSpace>;
}

GridSpace.defaultProps = {};

export default GridSpace;
