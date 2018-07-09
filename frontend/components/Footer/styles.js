import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import theme from '../../styles/theme';
import {grid} from '../../styles/grid';

export const StyledFooter = styled.footer`
  color: ${theme.LinkSecondary.CurrentColor};
  grid-column: span 3;
  font-size: ${(props) => props.theme.pxScale[2]};
  ${grid}
  grid-row-start: 3;
  grid-row-end: 4;

  a {
    ${(props) => props.theme.linkOther};
    }
  }
`;

export const StyledFooterItemFull = styled.div`
  display: inline-flex;
  flex-basis: 100%;
`;

export const StyledFooterItem = styled.div`
  display: inline-flex;
  align-items: start;
  position: relative;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-column: span 3;
  padding-top: ${(props) => props.theme.pxScale[6]};

  ${breakpoints.bpM} {
    grid-column: span 1;
    padding-top: 0;
  }
`;
