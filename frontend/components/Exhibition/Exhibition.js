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
}) {
  const imageMarkup = exhibitionImage ? (
    <StyledExhibitionThumb src={exhibitionImage} alt={title} />
  ) : null;

  console.log(url);

  return (
    <StyledExhibition>
      <Link href={`/exhibition?slug=${slug}`} as={url}>
        {imageMarkup}
        <StyledExhibitionName>
          <span
            dangerouslySetInnerHTML={{
              __html: commaListsAnd`${artists}: ${title}`,
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
