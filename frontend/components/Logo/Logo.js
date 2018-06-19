import Link from 'next/link'
import { StyledLogo, StyledLogoLink } from './styles'

function Logo() {
  return (
    <StyledLogo>
      <Link href="/">
        <StyledLogoLink>Logo</StyledLogoLink>
      </Link>
    </StyledLogo>

  )
}

export default Logo;