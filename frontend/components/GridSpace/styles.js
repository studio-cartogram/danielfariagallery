import styled from 'styled-components';

export const StyledGridSpace = styled.div`
  grid-column: span 3;
  padding-top: ${(props) => props.theme.pxScale[2]};
`;
