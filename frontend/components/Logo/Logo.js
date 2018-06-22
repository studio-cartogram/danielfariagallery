import Link from "next/link";
import { StyledLogo, StyledLogoText } from "./styles";
import Icon from "../Icon";

function Logo() {
  return (
    <StyledLogo>
      <Link href="https://github.com/postlight/headless-wp-starter">
        <a>
          <Icon icon={"LOGO"} />
        </a>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
