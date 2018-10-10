import React from 'react';
import {default as NextLink} from 'next/link';
import {
  StyledPrimaryLink,
  StyledSecondaryLink,
  StyledTertiaryLink,
} from './styles';

function Link({href, variant, as, children, current, onClick, ...aprops}) {
  if (onClick) {
    return (
      <a onClick={onClick} {...aprops}>
        {children}
      </a>
    );
  }

  switch (variant) {
    case 'secondary':
      return (
        <StyledSecondaryLink variant={variant} current={current}>
          <NextLink as={as} href={href}>
            <a {...aprops}>{children}</a>
          </NextLink>
        </StyledSecondaryLink>
      );
    case 'tertiary':
      return (
        <StyledTertiaryLink variant={variant} current={current}>
          <NextLink as={as} href={href}>
            <a {...aprops}>{children}</a>
          </NextLink>
        </StyledTertiaryLink>
      );
    default:
      return (
        <StyledPrimaryLink variant={variant} current={current}>
          <NextLink as={as} href={href}>
            <a {...aprops}>{children}</a>
          </NextLink>
        </StyledPrimaryLink>
      );
  }
}

export default Link;
