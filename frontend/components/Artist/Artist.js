import {StyledArtistName, StyledArtist} from './styles';
import Image from '../Image';
import Link from '../../components/Link';

function Artist({url, slug, artistImage, title}) {
  return (
    <StyledArtist>
      <StyledArtistName>
        <Link href={`/artist?slug=${slug}`} as={url}>
          {title}
        </Link>
      </StyledArtistName>
      <Image src={artistImage} alt={title} />
    </StyledArtist>
  );
}

export default Artist;
