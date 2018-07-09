import React, {Component} from 'react';
import {StyledLayout} from './styles';

function Layout({children}) {
  return <StyledLayout>{children}</StyledLayout>;
}

Layout.defaultProps = {};

export default Layout;
