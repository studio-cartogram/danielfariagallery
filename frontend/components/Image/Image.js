import React, {Component} from 'react';
import {StyledImage} from './styles';

function Image({src, alt}) {
  return <StyledImage scr={src} alt={alt} />;
}

export default Image;
