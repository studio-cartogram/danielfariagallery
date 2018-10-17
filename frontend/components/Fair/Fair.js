import Link from '../../components/Link';
import Thumbnail from '../../components/Thumbnail';

import {
  StyledFairName,
  StyledFairDate,
  StyledFair,
  StyledFairThumb,
} from './styles';

function Fair({
  url,
  slug,
  fairImage,
  artists,
  title,
  startdate,
  enddate,
  location,
}) {
  const imageMarkup = fairImage ? (
    <StyledFairThumb src={fairImage} alt={title} />
  ) : null;

  const displayTitle = `${title}, ${location}`;

  return (
    <StyledFair>
      <Link variant="zoom" href={`/fair?slug=${slug}`} as={url}>
        {imageMarkup}
        <StyledFairName>
          <span
            dangerouslySetInnerHTML={{
              __html: displayTitle,
            }}
          />
        </StyledFairName>
        <StyledFairDate>
          {startdate} - {enddate}
        </StyledFairDate>
      </Link>
    </StyledFair>
  );
}

export default Fair;
