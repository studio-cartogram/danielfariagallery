import React from 'react';
import PropTypes from 'prop-types';

function Error({type, message}) {
  console.log(message);
  switch (type) {
    case 'empty':
      return <div>This is empty</div>;
    default:
      return <div>default error</div>;
  }
}

Error.PropTypes = {
  type: PropTypes.oneOf(['empty']),
};

export default Error;
