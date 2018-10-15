import Link from '../../components/Link';

import {
  StyledPublicationName,
  StyledPublication,
  StyledPublicationThumb,
} from './styles';

function Publication({url, slug, publicationImage, artists, title}) {
  const imageMarkup = publicationImage ? (
    <StyledPublicationThumb src={publicationImage} alt={title} />
  ) : null;

  return (
    <StyledPublication>
      <Link variant="zoom" href={`/publication?slug=${slug}`} as={url}>
        {imageMarkup}
        <StyledPublicationName>
          <span
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </StyledPublicationName>
      </Link>
    </StyledPublication>
  );
}

export default Publication;
