import React from 'react';
import PropTypes from 'prop-types';

function Error({type, message}) {
  console.log(message);
  switch (type) {
    case 'empty':
      return <div>There is no content to show.</div>;
    default:
      return (
        <div>
          You’ve encountered an error. We're sorry, use the navigationt to find
          your way back.
        </div>
      );
  }
}

Error.PropTypes = {
  type: PropTypes.oneOf(['empty']),
};

export default Error;
