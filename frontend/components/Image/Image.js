import React from 'react';
import {StyledImage} from './styles';

function Image({src, alt}) {
  return <StyledImage src={src} alt={alt} />;
}

export default Image;
