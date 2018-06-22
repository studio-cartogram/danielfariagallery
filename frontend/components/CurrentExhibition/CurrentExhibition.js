import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { Config } from "../../config";
import Link from "next/link";

export default class CurrentExhibition extends Component {
  state = {
    exhibitions: []
  };

  async componentWillMount() {
    const exhibitionsRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/exhibition?_embed`
    );
    const exhibitions = await exhibitionsRes.json();
    this.setState({
      exhibitions
    });
  }
}
