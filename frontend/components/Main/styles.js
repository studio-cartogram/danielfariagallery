import styled from 'styled-components';
import {grid} from '../../styles/grid';

export const StyledMain = styled.section`
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${(props) => props.theme.pxScale[6]};
`;
