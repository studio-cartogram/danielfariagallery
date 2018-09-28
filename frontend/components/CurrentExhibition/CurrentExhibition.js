import React, {Component} from 'react';
import Link from '../../components/Link';
import {StyledImage, StyledImageContainer} from './styles';

function CurrentExhibition({url, slug, image, title}) {
  return (
    <StyledImageContainer>
      <Link as={url} href={`/exhibitions?slug=${slug}`}>
        <StyledImage key={title} alt={title} src={image} />
      </Link>
    </StyledImageContainer>
  );
}

export default CurrentExhibition;
