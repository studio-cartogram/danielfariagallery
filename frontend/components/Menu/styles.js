import styled from "styled-components";
import { scale } from "../../styles/scale";

export const StyledMenuText = styled.span`
  color: ${props => props.theme.LinkPrimary.color};
  margin-right: ${scale.scaleDuo};
  &:hover {
    color: ${props => props.theme.LinkPrimary.hover};
  }
`;

export const StyledMenu = styled.nav`
  padding-bottom: ${scale.scaleQuin};
`;
