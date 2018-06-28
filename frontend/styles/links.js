import {css} from 'styled-components';

const linkMain = css`
  color: ${(props) => props.theme.LinkPrimary.CurrentColor};
  position: relative;

  &:after {
    width: 0%;
    content: '';
    left: 0;
    bottom: 0;
    position: absolute;
    height: 1px;
    background-color: ${(props) => props.theme.LinkPrimary.CurrentColor};
    transition: width ${(props) => props.theme.transitions.default};
  }
`;

const linkMainHover = css`
  &:hover::after {
    width: 100%;
    transition: width ${(props) => props.theme.transitions.default};
  }
`;

const linkOther = css`
  display: inline-flex;
  position: relative;
  height: ${(props) => props.theme.pxScale[3]};
  color: ${(props) => props.theme.LinkSecondary.CurrentColor};

  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.LinkTertiary.CurrentColor};
    transition: width 0.175s ease-in;
  }
`;

const linkOtherHover = css`
  &:hover::after {
    width: 0%;
  }
`;

export {linkMain, linkMainHover, linkOther, linkOtherHover};
