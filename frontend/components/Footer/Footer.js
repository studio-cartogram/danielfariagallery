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
            <Link variant="tertiary" target="_blank" href={map}>
              Directions
            </Link>
          </p>
        </StyledFooterItemFull>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <p>
            <Link variant="tertiary" href={`mailto:${email}`}>
              {email}
            </Link>
            <br />
            <Link variant="tertiary" href={`tel:${phone}`}>
              {phone}
            </Link>
          </p>
        </StyledFooterItemFull>
      </StyledFooterItem>
      <StyledFooterItem>
        <Link variant="tertiary" target="_blank" href={twitter}>
          Twitter
        </Link>
        <Link variant="tertiary" target="_blank" href={facebook}>
          Facebook
        </Link>
        <Link variant="tertiary" target="_blank" href={instagram}>
          Instagram
        </Link>
        <Link variant="tertiary" target="_blank" href={newsletter}>
          Subscribe
        </Link>
      </StyledFooterItem>
    </StyledFooter>
  );
}

export default Footer;
