import styled from 'styled-components';
import {breakpoints} from '../../styles/breakpoints';

export const StyledModal = styled.div`
  background: rgba(255, 255, 255, 1);
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
  padding-top: ${(props) => props.theme.pxScale[1]};
  height: 100vh;
`;

export const StyledControls = styled.div`
  margin-left: ${(props) => props.theme.pxScale[4]};
  display: flex;

  > * {
    margin-right: ${(props) => props.theme.pxScale[2]};
  }
`;
export const StyledTitle = styled.div`
  align-items: baseline;
  width: 100%;
  order: 1;
  > * {
    margin-right: ${(props) => props.theme.pxScale[2]};
  }
`;

export const StyledModalMast = styled.div`
  position: absolute;
  display: flex;
  align-items: baseline;
  width: 100%;
  flex-wrap: wrap;

  ${breakpoints.bpM} {
    flex-wrap: no-wrap;
  }

  > * {
    margin-right: ${(props) => props.theme.pxScale[2]};
  }
`;

export const StyledImage = styled.img`
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  right: 0;
  max-height: 100%;
  width: auto;
  max-width: 100%;
  min-height: 200px;
  padding: ${(props) => props.theme.pxScale[9]} 0 0 0;
  margin: 0 auto;
`;
