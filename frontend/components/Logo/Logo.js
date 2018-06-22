import Link from "next/link";
import { StyledLogo } from "./styles";
import Icon from "../Icon";

function Logo() {
  return (
    <StyledLogo>
      <Link href="/">
        <a>
          <Icon icon={"LOGO"} />
        </a>
      </Link>
    </StyledLogo>
  );
}

export default Logo;
