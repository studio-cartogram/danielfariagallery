import styled from 'styled-components';

const StyledThumbnailImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledThumbnail = styled.div`
  overflow: hidden;
  display: grid;
`;

const StyledThumbnailCaption = styled.p`
  padding-top: ${(props) => props.theme.pxScale[1]};
`;

export {StyledThumbnailImage, StyledThumbnail, StyledThumbnailCaption};
