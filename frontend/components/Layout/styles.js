import styled from 'styled-components';
import {scale} from '../../styles/scale';
import {breakpoints} from '../../styles/breakpoints';

export const StyledLayout = styled.section`
  padding: ${(props) => props.theme.pxScale[6]}
    ${(props) => props.theme.pxScale[8]};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${breakpoints.bpM} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;
