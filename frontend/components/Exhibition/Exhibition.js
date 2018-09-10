import Link from '../../components/Link';

import {
  StyledExhibitionName,
  StyledExhibitionDate,
  StyledExhibition,
  StyledExhibitionThumb,
} from './styles';

function Exhibition({url, exhibitionImage, artist, title, startdate, enddate}) {
  const imageMarkup = exhibitionImage ? (
    <StyledExhibitionThumb src={exhibitionImage} alt={title} />
  ) : null;

  return (
    <StyledExhibition>
      <Link href={url}>
        {imageMarkup}
        <StyledExhibitionName>
          {artist}: {title}
        </StyledExhibitionName>
        <StyledExhibitionDate>
          {startdate} - {enddate}
        </StyledExhibitionDate>
      </Link>
    </StyledExhibition>
  );
}

export default Exhibition;
