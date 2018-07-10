import styled from 'styled-components';

const StyledThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const StyledThumbnail = styled.div`
  grid-column: span 1;
  overflow: hidden;
`;

export {StyledThumbnailImage, StyledThumbnail};
