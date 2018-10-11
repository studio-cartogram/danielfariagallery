import React from 'react';
import {default as NextLink} from 'next/link';
import {
  StyledPrimaryLink,
  StyledSecondaryLink,
  StyledTertiaryLink,
  StyledInvisibleLink,
  StyledHybridLink,
  StyledZoomLink,
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
    case 'invisible':
      return (
        <StyledInvisibleLink variant={variant} current={current}>
          <NextLink as={as} href={href}>
            <a {...aprops}>{children}</a>
          </NextLink>
        </StyledInvisibleLink>
      );
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
    case 'hybrid':
      return (
        <StyledHybridLink variant={variant} current={current}>
          <NextLink as={as} href={href}>
            <a {...aprops}>{children}</a>
          </NextLink>
        </StyledHybridLink>
      );
    case 'zoom':
      return (
        <StyledZoomLink variant={variant} current={current}>
          <NextLink as={as} href={href}>
            <a {...aprops}>{children}</a>
          </NextLink>
        </StyledZoomLink>
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
