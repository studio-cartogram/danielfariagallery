import React, {Component} from 'react';
import Link from 'next/link';
import {StyledPageMast} from './styles';

function PageMast({children}) {
  return <StyledPageMast>{children}</StyledPageMast>;
}

export default PageMast;
