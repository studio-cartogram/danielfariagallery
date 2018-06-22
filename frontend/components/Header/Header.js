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
