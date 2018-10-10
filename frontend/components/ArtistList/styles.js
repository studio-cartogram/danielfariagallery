import styled from 'styled-components';

const StyledArtistList = styled.div`
  grid-column: span 1;
  width: 100%;
  height: auto;
`;

const StyledArtistName = styled.span`
  grid-column: span 1;
  width: 100%;
  display: inline-flex;
  padding-bottom: ${(props) => props.theme.pxScale[2]};
`;

export {StyledArtistList, StyledArtistName};
