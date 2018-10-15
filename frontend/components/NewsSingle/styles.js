import styled from 'styled-components';

const StyledArtistLinkList = styled.ul`
  padding-top: ${(props) => props.theme.pxScale[4]};
  padding-bottom: ${(props) => props.theme.pxScale[5]};
  display: block;
`;

const StyledArtistLink = styled.li`
  cursor: pointer;
  display: inline-flex;
  padding-top: ${(props) => props.theme.pxScale[0]};
  padding-right: ${(props) => props.theme.pxScale[1]};
  padding-left: ${(props) => props.theme.pxScale[1]};
`;

const StyledContent = styled.div`
  a {
    display: inline-flex;
    position: relative;
    cursor: pointer;
    height: ${(props) => props.theme.pxScale[3]};
    color: ${(props) => props.theme.LinkSecondary.CurrentColor};

    &:after {
      width: 100%;
      content: '';
      left: 0;
      bottom: 0;
      position: absolute;
      height: 1px;
      background-color: ${(props) => props.theme.BorderLight.CurrentColor};
      transition: width ${(props) => props.theme.transitions.default};
    }

    &:hover::after {
      width: 0;
    }
  }
`;

export {StyledArtistLinkList, StyledArtistLink, StyledContent};
