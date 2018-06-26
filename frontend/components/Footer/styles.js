import styled from "styled-components";
import { scale } from "../../styles/scale";
import { breakpoints } from "../../styles/breakpoints";
import theme from "../../styles/theme";

export const StyledFooter = styled.footer`
  color: ${theme.LinkSecondary.color};
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${scale.scaleSex};
  position: relative;
  font-size: ${scale.scaleDuo};
  a {
    display: inline-flex;
    position: relative;
    height: ${scale.scaleTrio};
    color: ${theme.LinkSecondary.color};
    &:after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: ${theme.LinkTertiary.color};
      transition: width 0.175s ease-in;
    }
    &:hover::after {
      width: 0%;
    }
  }
`;

export const StyledFooterItemFull = styled.div`
  display: inline-flex;
  flex-basis: 100%;
`;

export const StyledFooterItem = styled.div`
  display: inline-flex;
  align-items: start;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-column: span 3;
  padding-top: ${scale.scaleSex};

  ${breakpoints.bpTablet} {
    grid-column: span 1;
    padding-top: 0;
  }
`;
