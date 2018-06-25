import styled from "styled-components";

export const StyledMenuText = styled.span`
  color: ${props => props.theme.LinkPrimary.color};
  margin-right: 16px;
  &:hover {
    color: ${props => props.theme.LinkPrimary.hover};
  }
`;

export const StyledMenu = styled.nav`
  padding-bottom: 40px;
`;
