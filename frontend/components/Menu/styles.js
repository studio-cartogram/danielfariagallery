import styled from "styled-components";
import { scale } from "../../styles/scale";
import { breakpoints } from "../../styles/breakpoints";
import theme from "../../styles/theme";

export const StyledMenuText = styled.span`
  color: ${props => props.theme.LinkPrimary.color};
  margin-left: 0;
  margin-right: ${scale.scaleDuo};
  position: relative;
  display: inline-flex;

  &:after {
    width: 0%;
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    height: 1px;
    background-color: ${theme.LinkPrimary.color};
    transition: width 0.175s ease-in-out;
  }
  &:hover::after {
    width: 100%;
    transition: width 0.175s ease-in-out;
  }

  ${breakpoints.bpTablet} {
    margin-left: ${scale.scaleDuo};
    margin-right: 0;
  }
`;

export const StyledMenu = styled.nav`
  grid-column: span 3;
  display: inline-flex;
  justify-content: flex-start;
  padding-bottom: ${scale.scaleSex};

  ${breakpoints.bpTablet} {
    grid-column: span 2;
    justify-content: flex-end;
    padding-bottom: 0;
  }
`;
