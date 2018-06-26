import Main from "../components/Main";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import { Config } from "../config";
import ExhibitionIndex from "../components/ExhibitionIndex";
import withLayout from "../decorators/withLayout";

class ExhibitionIndexPage extends Component {
  render() {
    return (
      <Main>
        <h1>Exhibition Index</h1>
        <ExhibitionIndex limit={20} />
      </Main>
    );
  }
}

export default withLayout(ExhibitionIndexPage);
