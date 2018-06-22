import React, { Component } from "react";
import Head from "next/head";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import { StyledHeader } from "./styles";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* remove this and put it in documnt */}
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Daniel Faria Gallery, Toronto Canada</title>
        </Head>

        <header>
          <StyledHeader>
            <Logo />
            <Menu menu={this.props.mainNav} />
          </StyledHeader>
        </header>
      </div>
    );
  }
}

export default Header;
