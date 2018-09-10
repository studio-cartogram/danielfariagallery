import Link from '../../components/Link';
import {StyledFairName, StyledFair} from './styles';
import Image from '../Image';

function Fair({url, fairImage, title}) {
  return (
    <StyledFair>
      <StyledFairName>
        <Link href={url}>{title}</Link>
      </StyledFairName>
      <Image src={fairImage} alt={title} />
    </StyledFair>
  );
}

export default Fair;
