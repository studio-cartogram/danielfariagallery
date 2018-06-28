import React, {Component} from 'react';
import {StyledImage} from './styles';

function Image({src, alt, title}) {
  return <StyledImage scr={src} alt={alt} title={title} />;
}

export default Image;
