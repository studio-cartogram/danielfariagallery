import React from 'react';
import {default as NextLink} from 'next/link';
import {
  StyledPrimaryLink,
  StyledSecondaryLink,
  StyledTertiaryLink,
  StyledInvisibleLink,
  StyledHybridLink,
  StyledZoomLink,
  StyledPrimaryButton,
} from './styles';

function Link({href, variant, as, children, current, onClick, ...aprops}) {
  if (onClick) {
    return (
      <StyledPrimaryButton
        onClick={onClick}
        variant={variant}
        current={current}
      >
        {children}
      </StyledPrimaryButton>
    );
  }

  const content = href ? (
    <NextLink as={as} href={href}>
      <a {...aprops}>{children}</a>
    </NextLink>
  ) : (
    children
  );

  switch (variant) {
    case 'invisible':
      return (
        <StyledInvisibleLink variant={variant} current={current}>
          {content}
        </StyledInvisibleLink>
      );
    case 'secondary':
      return (
        <StyledSecondaryLink variant={variant} current={current}>
          {content}
        </StyledSecondaryLink>
      );
    case 'tertiary':
      return (
        <StyledTertiaryLink variant={variant} current={current}>
          {content}
        </StyledTertiaryLink>
      );
    case 'hybrid':
      return (
        <StyledHybridLink variant={variant} current={current}>
          {content}
        </StyledHybridLink>
      );
    case 'zoom':
      return (
        <StyledZoomLink variant={variant} current={current}>
          {content}
        </StyledZoomLink>
      );
    default:
      return (
        <StyledPrimaryLink variant={variant} current={current}>
          {content}
        </StyledPrimaryLink>
      );
  }
}

export default Link;
