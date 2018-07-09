import React, {Component} from 'react';
import {StyledColumn} from './styles';

function Column({children}) {
  return <StyledColumn>{children}</StyledColumn>;
}

Column.defaultProps = {};

export default Column;
