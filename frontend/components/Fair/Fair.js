import Link from 'next/link';
import {StyledFairName, StyledFair} from './styles';
import Image from '../Image';

function Fair({url, fairImage, title}) {
  return (
    <StyledFair>
      <StyledFairName>
        <Link href={url}>
          <a>{title}</a>
        </Link>
      </StyledFairName>
      <Image scr={fairImage} alt={title} />
    </StyledFair>
  );
}

export default Fair;
