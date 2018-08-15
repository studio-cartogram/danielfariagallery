import Link from 'next/link';
import {StyledExhibitionName, StyledExhibition} from './styles';
import Image from '../Image';

function Exhibition({url, exhibitionImage, title}) {
  const imageMarkup = exhibitionImage ? (
    <Image src={exhibitionImage} alt={title} />
  ) : null;

  return (
    <StyledExhibition>
      <StyledExhibitionName>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </StyledExhibitionName>
      {imageMarkup}
    </StyledExhibition>
  );
}

export default Exhibition;
