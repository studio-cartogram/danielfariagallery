import Link from '../../components/Link';
import {StyledFairName, StyledFair} from './styles';
import Image from '../Image';

function Fair({url, slug, fairImage, title}) {
  return (
    <StyledFair>
      <StyledFairName>
        <Link as={url} href={`/fair?slug=${slug}`}>
          {title}
        </Link>
      </StyledFairName>
      <Image src={fairImage} alt={title} />
    </StyledFair>
  );
}

export default Fair;
