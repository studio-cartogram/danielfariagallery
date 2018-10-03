import React, {Component} from 'react';
import Menu from '../Menu';
import Logo from '../Logo';
import {StyledHeader} from './styles';

function Header({items, current}) {
  return (
    <StyledHeader>
      <Logo />
      <Menu items={items} current={current} />
    </StyledHeader>
  );
}

export default Header;
