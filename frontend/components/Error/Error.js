import React from 'react';
import propTypes from 'prop-types';

function Error({type, message}) {
  console.log(message);
  switch (type) {
    case 'empty':
      return <div>There is no content to show.</div>;
    default:
      return (
        <div>
          You’ve encountered an error. We're sorry, use the navigation to find
          your way back.
        </div>
      );
  }
}

Error.propTypes = {
  type: propTypes.oneOf(['empty']),
};

export default Error;
