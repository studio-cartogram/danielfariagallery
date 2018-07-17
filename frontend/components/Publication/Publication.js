import Link from 'next/link';
import {StyledPublicationName, StyledPublication} from './styles';
import Image from '../Image';

function Publication({url, publicationImage, title}) {
  return (
    <StyledPublication>
      <StyledPublicationName>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </StyledPublicationName>
      <Image src={publicationImage} alt={title} />
    </StyledPublication>
  );
}

export default Publication;
