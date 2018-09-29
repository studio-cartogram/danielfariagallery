import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledArtistList = styled.div`
  grid-column: span 1;
  width: 100%;
  height: auto;
`;

const StyledArtistName = styled.div`
  grid-column: span 1;
  width: 100%;
  padding-bottom: ${(props) => props.theme.pxScale[2]};
`;

const StyledArtistText = styled.span`
  font-size: ${(props) => props.theme.pxScale[2]};
  padding-bottom: ${(props) => props.theme.pxScale[0]};
  ${(props) => props.theme.linkMain};
`;

export {StyledArtistList, StyledArtistName, StyledArtistText};
