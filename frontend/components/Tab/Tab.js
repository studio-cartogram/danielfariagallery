import React, {Component} from 'react';
import {StyledTab} from './styles';

function Tab({children}) {
  return <StyledTab>{children}</StyledTab>;
}

Tab.defaultProps = {};

export default Tab;
