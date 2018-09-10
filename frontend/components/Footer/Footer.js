import React, {Component} from 'react';
import {StyledFooter, StyledFooterItem, StyledFooterItemFull} from './styles';
import Link from '../../components/Link';

function Footer({phone, email, address, map, facebook, twitter, instagram}) {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <p>{address}</p>
        </StyledFooterItemFull>
        <Link target="_blank" href={map}>
          Directions
        </Link>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <Link href={`mailto:${email}`}>{email}</Link>
        </StyledFooterItemFull>
        <Link href={`tel:${phone}`}>{phone}</Link>
      </StyledFooterItem>
      <StyledFooterItem>
        <Link target="_blank" href={twitter}>
          Twitter
        </Link>
        <Link target="_blank" href={facebook}>
          Facebook
        </Link>
        <Link target="_blank" href={instagram}>
          Instagram
        </Link>
        <Link href="/">Subscribe</Link>
      </StyledFooterItem>
    </StyledFooter>
  );
}

export default Footer;
