import Link from 'next/link';
import {StyledArtistName, StyledArtist} from './styles';
import Image from '../Image';

function Artist({url, artistimage, title}) {
  return (
    <Link href={url}>
      <a>
        {title}
        <img scr={artistimage} alt={title} title={title} />
      </a>
    </Link>
  );
}

export default Artist;
