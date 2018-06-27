import styled from 'styled-components';

const iconSizes = {
  sm: `${(props) => props.theme.pxScale[2]}`,
  md: `${(props) => props.theme.pxScale[3]}`,
  lg: `${(props) => props.theme.pxScale[5]}`,
};

const StyledIcon = styled.i`
  display: inline-block;
  vertical-align: middle;
  align-self: center;
  fill: currentColor;
`;

export {StyledIcon};
