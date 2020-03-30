import styled from 'styled-components';

const StyledVideo = styled.div`
  grid-column: span 3;
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export {StyledVideo};
