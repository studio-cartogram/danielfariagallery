import React, { Component } from "react";
import { StyledMain } from "./styles";

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

Main.defaultProps = {};

export default Main;
