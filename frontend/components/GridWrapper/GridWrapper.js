import React, {Component} from 'react';
import {StyledGridWrapper} from './styles';

function GridWrapper({children}) {
  return <StyledGridWrapper>{children}</StyledGridWrapper>;
}

GridWrapper.defaultProps = {};

export default GridWrapper;
