import React from 'react';
import PropTypes from 'prop-types';

function Empty({type, message}) {
  console.log(message);
  switch (type) {
    case 'empty':
      return <div>This is empty</div>;
    default:
      return <div>default empty</div>;
  }
}

Empty.PropTypes = {
  type: PropTypes.oneOf(['empty']),
};

export default Empty;
