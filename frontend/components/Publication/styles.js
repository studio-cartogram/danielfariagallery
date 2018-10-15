import styled from 'styled-components';
import theme from '../../styles/theme';
import {breakpoints} from '../../styles/breakpoints';

const StyledPublication = styled.div`
  width: 100%;
  height: auto;
  object-fit: cover;
  grid-column: span 1;
`;

const StyledPublicationName = styled.p`
  font-size: ${(props) => props.theme.pxScale[2]};
  color: ${theme.Body.CurrentColor};
`;

const StyledPublicationThumb = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
  padding-bottom: ${(props) => props.theme.pxScale[2]};
`;

export {StyledPublication, StyledPublicationName, StyledPublicationThumb};
