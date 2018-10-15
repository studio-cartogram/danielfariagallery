import Link from '../../components/Link';
import Thumbnail from '../../components/Thumbnail';

import {
  StyledFairName,
  StyledFairDate,
  StyledFair,
  StyledFairThumb,
} from './styles';

function Fair({url, slug, fairImage, artists, title, startdate, enddate}) {
  const imageMarkup = fairImage ? (
    <StyledFairThumb src={fairImage} alt={title} />
  ) : null;

  return (
    <StyledFair>
      <Link variant="zoom" href={`/fair?slug=${slug}`} as={url}>
        {imageMarkup}
        <StyledFairName>
          <span
            dangerouslySetInnerHTML={{
              __html: title,
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
