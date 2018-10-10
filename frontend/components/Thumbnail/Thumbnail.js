import React from 'react';
import Link from '../../components/Link';
import {
  StyledThumbnail,
  StyledThumbnailImage,
  StyledThumbnailCaption,
} from './styles';

function Thumbnail({url, image, title, details}) {
  return (
    <StyledThumbnail>
      <Link href={url} as={url}>
        <StyledThumbnailImage key={title} alt={title} src={image} />
      </Link>
      <StyledThumbnailCaption>{title}</StyledThumbnailCaption>
    </StyledThumbnail>
  );
}

export default Thumbnail;
