import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import React, { Component } from "react";
import { Config } from "../config";
import PostIndex from "../components/PostIndex";
import PageWrapper from "../components/PageWrapper.js";

class PostIndexPage extends Component {
  render() {
    return (
      <div>
        <h1>Post Index</h1>
        <PostIndex limit={20} />
      </div>
    );
  }
}

export default withLayout(PostIndexPage);
