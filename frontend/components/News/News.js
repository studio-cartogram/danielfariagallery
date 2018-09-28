import Link from '../../components/Link';
import {StyledNewsName, StyledNews} from './styles';

function News({url, slug, title}) {
  return (
    <StyledNews>
      <StyledNewsName>
        <Link as={url} href={`/new?slug=${slug}`}>
          {title}
        </Link>
      </StyledNewsName>
    </StyledNews>
  );
}

export default News;
