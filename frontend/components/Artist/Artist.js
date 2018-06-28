import Link from 'next/link';
import {StyledArtistName, StyledArtist} from './styles';
import Image from '../Image';

function Artist({url, artistimage, title}) {
  return (
    <StyledArtist>
      <StyledArtistName>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </StyledArtistName>
      <img scr={artistimage} alt={title} title={title} />
    </StyledArtist>
  );
}

export default Artist;
