import styled from "styled-components";
import theme from "../../styles/theme";

export const StyledMenuText = styled.span`
  color: ${theme.LinkPrimary.color};
  margin-left: 16px;
  &:hover {
    color: ${theme.LinkPrimary.hover};
  }
`;
