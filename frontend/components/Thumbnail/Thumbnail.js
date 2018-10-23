import React from 'react';
import Link from '../../components/Link';
import {
  StyledThumbnail,
  StyledThumbnailImage,
  StyledThumbnailCaption,
} from './styles';

function Thumbnail({url, href, as, id, image, title}) {
  return (
    <StyledThumbnail>
      <Link variant="zoom" href={href} as={as}>
        <StyledThumbnailImage alt={title} src={image} />
      </Link>
      <StyledThumbnailCaption>{title}</StyledThumbnailCaption>
    </StyledThumbnail>
  );
}

export default Thumbnail;
