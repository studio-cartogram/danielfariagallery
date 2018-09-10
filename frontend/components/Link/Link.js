import React from 'react';
import {default as NextLink} from 'next/link';

function Link({href, children, ...aprops}) {
  return (
    <NextLink href={href}>
      <a {...aprops}>{children}</a>
    </NextLink>
  );
}

export default Link;
