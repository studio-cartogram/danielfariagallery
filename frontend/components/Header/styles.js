import styled from "styled-components";

export const StyledHeader = styled.header`
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${props => props.theme.pxScale[6]};
`;
