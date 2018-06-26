import React, { Component } from "react";
import { StyledFooter } from "./styles";
import Link from "next/link";

function Footer({ phone, email, address, map, facebook, twitter, instagram }) {
  return (
    <StyledFooter>
      <Link href={email}>
        <a>{email}</a>
      </Link>
    </StyledFooter>
  );
}

export default Footer;
