import React from 'react';
import propTypes from 'prop-types';
import {StyledEmpty} from './styles';

function Empty({type, message}) {
  console.log(message);
  switch (type) {
    case 'exhibitions':
      return (
        <StyledEmpty>
          Sorry, no exhibitions match these filters. Select a different year or
          artist.
        </StyledEmpty>
      );
    case 'empty':
      return <StyledEmpty>This is empty</StyledEmpty>;
    default:
      return <StyledEmpty>default empty</StyledEmpty>;
  }
}

Empty.propTypes = {
  type: propTypes.oneOf(['empty']),
};

export default Empty;
