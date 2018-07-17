import Link from 'next/link';
import {StyledExhibitionName, StyledExhibition} from './styles';
import Image from '../Image';

function Exhibition({url, exhibitionImage, title}) {
  return (
    <StyledExhibition>
      <StyledExhibitionName>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </StyledExhibitionName>
      <Image src={exhibitionImage} alt={title} />
    </StyledExhibition>
  );
}

export default Exhibition;
