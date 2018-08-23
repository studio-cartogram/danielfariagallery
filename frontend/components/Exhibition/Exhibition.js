import Link from 'next/link';

import {
  StyledExhibitionName,
  StyledExhibitionDate,
  StyledExhibition,
  StyledExhibitionThumb,
} from './styles';
import Image from '../Image';

function Exhibition({url, exhibitionImage, artist, title, startdate, enddate}) {
  const imageMarkup = exhibitionImage ? (
    <StyledExhibitionThumb src={exhibitionImage} alt={title} />
  ) : null;

  return (
    <StyledExhibition>
      <Link href={url}>
        <a>
          {imageMarkup}
          <StyledExhibitionName>
            {artist}: {title}
          </StyledExhibitionName>
          <StyledExhibitionDate>
            {startdate} - {enddate}
          </StyledExhibitionDate>
        </a>
      </Link>
    </StyledExhibition>
  );
}

export default Exhibition;
