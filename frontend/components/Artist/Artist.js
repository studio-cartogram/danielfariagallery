import Link from 'next/link';
import {StyledArtistName, StyledArtist} from './styles';
import Image from '../Image';

function Artist({url, artistImage, title}) {
  return (
    <StyledArtist>
      <StyledArtistName>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </StyledArtistName>
      <Image scr={artistImage} alt={title} />
    </StyledArtist>
  );
}

export default Artist;
