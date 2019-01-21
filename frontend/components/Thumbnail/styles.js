import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

const StyledThumbnailImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 4s;
`;

const StyledThumbnail = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-column: span 3;

  &:hover img {
    transform: scale(1.03);
  }

  ${breakpoints.bpM} {
    grid-column: span 1;

    &:hover img {
      transform: scale(1.1);
    }
  }
`;

const StyledThumbnailCaption = styled.p`
  padding-top: ${(props) => props.theme.pxScale[1]};
`;

export {StyledThumbnailImage, StyledThumbnail, StyledThumbnailCaption};
