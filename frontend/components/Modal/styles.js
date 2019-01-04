import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledModal = styled.div`
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: auto;
  height: auto;
  z-index: 1;
  grid-column: span 3;
  padding: ${(props) => props.theme.pxScale[3]};
  overflow-y: scroll;
  justify-items: start;

  ${breakpoints.bpM} {
    display: grid;
    padding-top: 0;
    padding: ${(props) => props.theme.pxScale[6]};
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
    grid-auto-rows: min-content;
    height: 100vh;
    grid-template-rows: auto auto 1fr;
  }
`;

export const StyledControls = styled.div`
  padding-bottom: ${(props) => props.theme.pxScale[3]};

  > * {
    margin-right: ${(props) => props.theme.pxScale[2]};
  }

  ${breakpoints.bpM} {
    padding-bottom: ${(props) => props.theme.pxScale[0]};
  }
`;

export const StyledModalMast = styled.div`
  grid-column: span 3;

  ${breakpoints.bpM} {
    grid-column: span 2;
    grid-column-start: 2;
    grid-column-end: 4;
  }
`;

export const StyledImage = styled.img`
  max-height: 100%;
  width: auto;
  max-width: 100%;
  min-height: 200px;
  height: auto;
  margin-bottom: ${(props) => props.theme.pxScale[3]};
  grid-column: span 3;

  ${breakpoints.bpM} {
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.pxScale[6]};
  }
`;
