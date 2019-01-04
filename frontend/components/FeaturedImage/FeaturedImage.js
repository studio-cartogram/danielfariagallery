import React from 'react';
import {StyledFeature, StyledFeatureImage} from './styles';

function FeaturedImage({image, title}) {
  return (
    <StyledFeature>
      <StyledFeatureImage alt={title} src={image} />
    </StyledFeature>
  );
}

export default FeaturedImage;
