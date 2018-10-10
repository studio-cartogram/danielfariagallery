import React, {Component} from 'react';
import {StyledFooter, StyledFooterItem, StyledFooterItemFull} from './styles';
import Link from '../../components/Link';

function Footer({phone, email, address, map, facebook, twitter, instagram}) {
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
        <Link variant="tertiary" href="/">
          Subscribe
        </Link>
      </StyledFooterItem>
    </StyledFooter>
  );
}

export default Footer;
