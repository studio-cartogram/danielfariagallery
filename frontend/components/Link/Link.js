import React from 'react';
import {default as NextLink} from 'next/link';

function Link({href, as, children, ...aprops}) {
  return (
    <NextLink as={as} href={href}>
      <a {...aprops}>{children}</a>
    </NextLink>
  );
}

export default Link;
