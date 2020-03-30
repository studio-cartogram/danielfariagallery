import React from 'react';
import {StyledVideo} from './styles';

function FeaturedImage({video}) {
  return <StyledVideo dangerouslySetInnerHTML={{__html: video}} />;
}

export default FeaturedImage;
