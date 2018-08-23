import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledGridWrapper = styled.section`
  min-height: calc(100vh - 96px);
  margin: ${(props) => props.theme.pxScale[3]};

  ${breakpoints.bpM} {
    margin: ${(props) => props.theme.pxScale[6]};
  }
`;
