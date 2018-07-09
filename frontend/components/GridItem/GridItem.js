import React, {Component} from 'react';
import {StyledGridItem} from './styles';

function GridItem({children}) {
  return <StyledGridItem>{children}</StyledGridItem>;
}

GridItem.defaultProps = {};

export default GridItem;
