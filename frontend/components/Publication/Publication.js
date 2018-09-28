import Link from '../../components/Link';
import {StyledPublicationName, StyledPublication} from './styles';
import Image from '../Image';

function Publication({url, slug, publicationImage, title}) {
  return (
    <StyledPublication>
      <StyledPublicationName>
        <Link as={url} href={`publication?slug=${slug}`}>
          {title}
        </Link>
      </StyledPublicationName>
      <Image src={publicationImage} alt={title} />
    </StyledPublication>
  );
}

export default Publication;
