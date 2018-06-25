import Layout from "../components/Layout.js";
import Link from 'next/link'
import fetch from "isomorphic-unfetch";
import React, { Component } from 'react';
import { Config } from '../config';

export default class ExhibitionIndex extends Component {

  static defaultProps = {
    limit: 2
  }

  state = {
    exhibitions: []
  }

  async componentWillMount() {
    const { limit } = this.props
    const exhibitionsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/exhibitions?per_page=${limit}`)
    const exhibitions = await exhibitionsRes.json();
    this.setState({
      exhibitions
    });
  }

  render() {
    const { exhibitions } = this.state;
    return (
      <section>
        <h3>Exhibitions Archive</h3>
        <ul>
          {exhibitions.map(post => (
            <li key={post.id}>
              <Link
                href={`/post?slug=${post.slug}&apiRoute=post`}
                as={`/post/${post.slug}`}
              >
                <a>{post.title.rendered}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    )
  }
};