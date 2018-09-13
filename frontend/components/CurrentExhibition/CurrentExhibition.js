import React, {Component} from 'react';
import Link from '../../components/Link';
import {StyledImage, StyledImageContainer} from './styles';

function CurrentExhibition({url, image, title}) {
  return (
    <StyledImageContainer>
      <Link href={url}>
        <StyledImage key={title} alt={title} src={image} />
      </Link>
    </StyledImageContainer>
  );
}

export default CurrentExhibition;
