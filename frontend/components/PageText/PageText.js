import React, {Component} from 'react';
import Link from 'next/link';
import {StyledPageText} from './styles';

function PageText({children}) {
  return <StyledPageText>{children}</StyledPageText>;
}

export default PageText;
