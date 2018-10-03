import Link from '../../components/Link';
import {StyledPublicationName, StyledPublication} from './styles';
import Image from '../Image';

function Publication({url, slug, publicationImage, title}) {
  const imageMarkup = publicationImage ? (
    <Image src={publicationImage} alt={title} />
  ) : null;
  return (
    <StyledPublication>
      <StyledPublicationName>
        <Link as={url} href={`publication?slug=${slug}`}>
          {title}
        </Link>
      </StyledPublicationName>
      {imageMarkup}
    </StyledPublication>
  );
}

export default Publication;
