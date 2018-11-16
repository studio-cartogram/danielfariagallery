import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';
import theme from '../../styles/theme';

export const StyledFooter = styled.footer`
  grid-column: span 3;
  display: flex;
  justify-content: space-between;
  color: ${theme.LinkSecondary.CurrentColor};
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.pxScale[2]};
  padding-top: ${(props) => props.theme.pxScale[3]};
  
  ${breakpoints.bpM} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }

  a {
    ${(props) => props.theme.linkOther};
    }
  }

`;

export const StyledFooterItemFull = styled.div`
  display: inline-flex;
  flex-basis: 100%;
  flex-wrap: wrap;
`;

export const StyledFooterItem = styled.div`
  display: inline-flex;
  align-items: start;
  position: relative;
  flex-wrap: wrap;
  grid-column: span 1;
  padding-top: ${(props) => props.theme.pxScale[0]};
  padding-bottom: ${(props) => props.theme.pxScale[3]};

  * p {
    padding-bottom: 0;
  }

  > span {
    margin-right: ${(props) => props.theme.pxScale[3]};
  }

  ${breakpoints.bpM} {
    padding-top: 0;
  }
`;
