import React, {Component} from 'react';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';
import {StyledHeader} from './styles';

function Header({items}) {
  return (
    <StyledHeader>
      <Logo />
      <Menu items={items} />
    </StyledHeader>
  );
}

export default Header;
