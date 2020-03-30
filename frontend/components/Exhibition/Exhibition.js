import Link from '../../components/Link';
import {commaListsAnd} from 'common-tags';

import {
  StyledExhibitionName,
  StyledExhibitionDate,
  StyledExhibition,
  StyledExhibitionThumb,
} from './styles';

function Exhibition({
  url,
  slug,
  exhibitionImage,
  artists,
  title,
  startdate,
  enddate,
  virtual,
}) {
  const imageMarkup = exhibitionImage ? (
    <StyledExhibitionThumb src={exhibitionImage} alt={title} />
  ) : null;

  const virtualLabelMarkup = virtual ? ' (virtual)' : '';
  const displayTitle =
    artists && artists.length
      ? commaListsAnd`${artists}: <em>${title}${virtualLabelMarkup}</em>`
      : `${title}${virtualLabelMarkup}`;

  return (
    <StyledExhibition>
      <Link variant="invisible" href={`/exhibition?slug=${slug}`} as={url}>
        {imageMarkup}
        <StyledExhibitionName>
          <span
            dangerouslySetInnerHTML={{
              __html: displayTitle,
            }}
          />
        </StyledExhibitionName>
        <StyledExhibitionDate>
          {startdate} - {enddate}
        </StyledExhibitionDate>
      </Link>
    </StyledExhibition>
  );
}

export default Exhibition;
