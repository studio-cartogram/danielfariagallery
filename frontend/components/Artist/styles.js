import styled from 'styled-components';

const StyledArtist = styled.div`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledArtistName = styled.h1`
  font-size: ${(props) => props.theme.pxScale[3]};
  ${(props) => props.theme.linkMain};
  ${(props) => props.theme.linkMainHover};
`;

export {StyledArtist, StyledArtistName};
