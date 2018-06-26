import styled from "styled-components";
import { scale } from "../../styles/scale";
import { breakpoints } from "../../styles/breakpoints";

export const StyledLayout = styled.section`
  padding: ${scale.scaleSex} ${scale.scaleDec};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${breakpoints.bpTablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: ${scale.scaleSex};
  }
`;
