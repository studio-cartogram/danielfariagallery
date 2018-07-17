import React, {Component} from 'react';
import Link from 'next/link';
import {StyledPageThumbs} from './styles';

function PageThumbs({children}) {
  return <StyledPageThumbs>{children}</StyledPageThumbs>;
}

export default PageThumbs;
