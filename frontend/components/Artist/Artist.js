import {StyledArtistName, StyledArtist} from './styles';
import Image from '../Image';
import Link from '../../components/Link';

function Artist({url, artistImage, title}) {
  return (
    <StyledArtist>
      <StyledArtistName>
        <Link href={url}>{title}</Link>
      </StyledArtistName>
      <Image src={artistImage} alt={title} />
    </StyledArtist>
  );
}

export default Artist;
