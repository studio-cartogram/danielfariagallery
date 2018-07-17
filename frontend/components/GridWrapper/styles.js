import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import {grid} from '../../styles/grid';
import theme from '../../styles/theme';

export const StyledGridWrapper = styled.section`
  min-height: calc(100vh - 96px);
  margin: ${(props) => props.theme.pxScale[6]};
`;
