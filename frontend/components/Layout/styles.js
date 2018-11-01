import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.pxScale[3]};
  padding: ${(props) => props.theme.pxScale[3]};
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  ${breakpoints.bpM} {
    padding: ${(props) => props.theme.pxScale[6]};
  }

  & > * {
    grid-column: span 3;
  }

  ${breakpoints.bpM} {
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;
