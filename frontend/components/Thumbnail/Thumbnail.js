import React, {Component} from 'react';
import Link from 'next/link';
import {
  StyledThumbnail,
  StyledThumbnailImage,
  StyledThumbnailCaption,
} from './styles';

function Thumbnail({url, image, title, details}) {
  return (
    <StyledThumbnail>
      <Link href={url}>
        <a>
          <StyledThumbnailImage key={title} alt={title} src={image} />
        </a>
      </Link>
      <StyledThumbnailCaption>{title}</StyledThumbnailCaption>
    </StyledThumbnail>
  );
}

export default Thumbnail;
