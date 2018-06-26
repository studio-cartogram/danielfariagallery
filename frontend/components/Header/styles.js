import styled from "styled-components";
import { scale } from "../../styles/scale";

export const StyledHeader = styled.header`
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${scale.scaleSex};
`;
