import React from 'react';
import {StyledButton} from './styles';

function Button({href, as, url, children, ...aprops}) {
  return (
    <StyledButton as={as} href={href} url={url}>
      <a {...aprops}>{children}</a>
    </StyledButton>
  );
}

export default Button;
