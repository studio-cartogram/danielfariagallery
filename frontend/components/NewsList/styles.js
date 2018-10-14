import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledNewsList = styled.ul`
  display: grid;
  grid-column: span 3;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.theme.pxScale[3]};
  list-style: none;
  width: 100%;
  height: auto;

  ${breakpoints.bpM} {
    grid-column: span 3;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;

const StyledNewsLi = styled.li`
  grid-column: span 3;

  ${breakpoints.bpM} {
    grid-column: span 1;
  }
`;

const StyledNewsLink = styled.span`
  cursor: pointer;
`;

const StyledArtistLinkList = styled.ul`
  padding-top: ${(props) => props.theme.pxScale[1]};
  display: block;
`;

const StyledArtistLink = styled.li`
  cursor: pointer;
  display: inline-flex;
  padding-top: ${(props) => props.theme.pxScale[0]};
  padding-right: ${(props) => props.theme.pxScale[2]};
`;

export {
  StyledNewsList,
  StyledNewsLi,
  StyledNewsLink,
  StyledArtistLinkList,
  StyledArtistLink,
};
