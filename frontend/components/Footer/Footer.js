import React, {Component} from 'react';
import {StyledFooter, StyledFooterItem, StyledFooterItemFull} from './styles';
import Link from '../../components/Link';
import PageNav from '../../components/PageNav';

function Footer({
  phone,
  email,
  address,
  map,
  facebook,
  twitter,
  instagram,
  newsletter,
}) {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <p>
            {address}
            <br />
            <Link variant="tertiary">
              <a target="_blank" href={map}>
                Directions
              </a>
            </Link>
          </p>
        </StyledFooterItemFull>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <p>
            <Link variant="tertiary">
              <a href={`mailto:${email}`}>{email}</a>
            </Link>
            <br />
            <Link variant="tertiary">
              <a href={`tel:${phone}`}>{phone}</a>
            </Link>
          </p>
        </StyledFooterItemFull>
      </StyledFooterItem>
      <StyledFooterItem>
        <Link variant="tertiary">
          <a target="_blank" href={twitter}>
            Twitter
          </a>
        </Link>
        <Link variant="tertiary">
          <a target="_blank" href={facebook}>
            Facebook
          </a>
        </Link>
        <Link variant="tertiary">
          <a target="_blank" href={instagram}>
            Instagram
          </a>
        </Link>
        <Link variant="tertiary">
          <a target="_blank" href={newsletter}>
            Subscribe
          </a>
        </Link>
      </StyledFooterItem>
    </StyledFooter>
  );
}

export default Footer;
