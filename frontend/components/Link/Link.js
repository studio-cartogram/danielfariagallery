import React from 'react';
import {default as NextLink} from 'next/link';

function Link({href, as, children, current, onClick, ...aprops}) {
  if (onClick) {
    return (
      <a onClick={onClick} {...aprops}>
        {children}
      </a>
    );
  }
  return (
    <NextLink as={as} href={href}>
      <a {...aprops}>{children}</a>
    </NextLink>
  );
}

export default Link;
