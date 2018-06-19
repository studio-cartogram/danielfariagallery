import Link from 'next/link'
import { StyledLogo, StyledLogoText } from './styles'

function Logo() {
  return (
    <StyledLogo>
      <Link href="https://github.com/postlight/headless-wp-starter">
        <a><StyledLogoText>Logo</StyledLogoText></a>
      </Link>
    </StyledLogo>
  )
}

export default Logo;