import styled from 'styled-components';

export const StyledTab = styled.div`
  padding-bottom: ${(props) => props.theme.pxScale[5]};
  a {
    ${(props) => props.theme.linkOther};
  }
`;
