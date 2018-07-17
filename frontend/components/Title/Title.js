import React, {Component} from 'react';
import {StyledTitle} from './styles';

function Title({children}) {
  return <StyledTitle>{children}</StyledTitle>;
}

Title.defaultProps = {};

export default Title;
