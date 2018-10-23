import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledModal = styled.div`
  background: white;
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
  padding-top: ${(props) => props.theme.pxScale[8]};
  overflow-y: scroll;

  ${breakpoints.bpM} {
    display: grid;
    padding-top: 0;
    padding: ${(props) => props.theme.pxScale[6]};
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${(props) => props.theme.pxScale[6]};
  }
`;

export const StyledModalControls = styled.div`
  position: fixed;
  top: ${(props) => props.theme.pxScale[3]};
  right: ${(props) => props.theme.pxScale[3]};
  display: flex;
  > * {
    margin-right: ${(props) => props.theme.pxScale[2]};
  }

  ${breakpoints.bpM} {
    top: ${(props) => props.theme.pxScale[6]};
    right: ${(props) => props.theme.pxScale[6]};

    > * {
      margin-left: ${(props) => props.theme.pxScale[2]};
    }
  }
`;

export const StyledClose = styled.div`
  position: fixed;
  top: ${(props) => props.theme.pxScale[3]};
  left: ${(props) => props.theme.pxScale[3]};

  ${breakpoints.bpM} {
    top: ${(props) => props.theme.pxScale[6]};
    left: ${(props) => props.theme.pxScale[6]};
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
  max-height: 100vh;
  width: auto;
  margin-bottom: ${(props) => props.theme.pxScale[3]};
  grid-column: span 3;

  ${breakpoints.bpM} {
    margin: 0 auto;
    margin-bottom: ${(props) => props.theme.pxScale[6]};
  }
`;
