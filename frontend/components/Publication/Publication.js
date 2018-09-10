import Link from '../../components/Link';
import {StyledPublicationName, StyledPublication} from './styles';
import Image from '../Image';

function Publication({url, publicationImage, title}) {
  return (
    <StyledPublication>
      <StyledPublicationName>
        <Link href={url}>{title}</Link>
      </StyledPublicationName>
      <Image src={publicationImage} alt={title} />
    </StyledPublication>
  );
}

export default Publication;
