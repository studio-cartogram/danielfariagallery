import styled from 'styled-components';
import theme from '../../styles/theme';
import {breakpoints} from '../../styles/breakpoints';

const StyledExhibition = styled.div`
  width: 100%;
  height: auto;
  object-fit: cover;
  grid-column: span 1;
`;

const StyledExhibitionDate = styled.p`
  font-size: ${(props) => props.theme.pxScale[2]};
  color: ${theme.Body.CurrentColor};
`;

const StyledExhibitionName = styled.p`
  font-size: ${(props) => props.theme.pxScale[2]};
  color: ${theme.Body.CurrentColor};
`;

const StyledExhibitionThumb = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
  padding-bottom: ${(props) => props.theme.pxScale[2]};
`;

export {
  StyledExhibition,
  StyledExhibitionName,
  StyledExhibitionDate,
  StyledExhibitionThumb,
};
