import Link from '../../components/Link';
import {StyledLogo} from './styles';
import Icon from '../Icon';

function Logo() {
  return (
    <StyledLogo>
      <Link variant="invisible" href="/">
        <Icon icon={'LOGO'} />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
