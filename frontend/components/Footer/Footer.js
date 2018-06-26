import React, { Component } from "react";
import { StyledFooter, StyledFooterItem, StyledFooterItemFull } from "./styles";
import Link from "next/link";

function Footer({ phone, email, address, map, facebook, twitter, instagram }) {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <p>{address}</p>
        </StyledFooterItemFull>
        <Link href={map}>
          <a>Directions</a>
        </Link>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledFooterItemFull>
          <Link href={`mailto:${email}`}>
            <a>{email}</a>
          </Link>
        </StyledFooterItemFull>
        <Link href={`tel:${phone}`}>
          <a>{phone}</a>
        </Link>
      </StyledFooterItem>
      <StyledFooterItem>
        <Link href={twitter}>
          <a>Twitter</a>
        </Link>
        <Link href={facebook}>
          <a>Facebook</a>
        </Link>
        <Link href={instagram}>
          <a>Instagram</a>
        </Link>
        <Link href="/">
          <a>Subscribe</a>
        </Link>
      </StyledFooterItem>
    </StyledFooter>
  );
}

export default Footer;
