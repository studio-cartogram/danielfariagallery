import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { Config } from "../../config";
import Link from "next/link";

const PAGE_ID = 85;
export default class CurrentExhibition extends Component {
  state = {
    currentExhibition: []
  };

  async componentWillMount() {
    const currentExhibitionRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/pages/${PAGE_ID}`
    );
    const currentExhibition = await currentExhibitionRes.json();
    this.setState({
      currentExhibition
    });
  }

  render() {
    if (!this.state.currentExhibition || !this.state.currentExhibition.acf) {
      return "loading";
    }
    const {
      currentExhibition: { acf }
    } = this.state;
    console.log(this.state);
    return (
      <div>
        <Link href={acf.current_exhibition.post_title}>
          <a>
            <img
              style={{ width: "100%" }}
              key={acf.current_exhibition[0].post_title}
              alt={acf.current_exhibition[0].post_title}
              src={acf.current_exhibition[0].acf.feature}
            />
          </a>
        </Link>
      </div>
    );
  }
}
