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
    this.setState( {
      exhibitions
    });
  }

  render() {
    const { exhibitions } = this.state;
    return (
      <section>
        <h3>Exhibition Archive</h3>
        <ul>
        {exhibitions.map(exhibition => (
          <li key={exhibition.id}>
            <Link 
            href={`/exhibition?slug=${exhibition.slug}&apiRoute=exhibition`}
            as={`/exhibition/${exhibition.slug}`}
            >
              <a>{exhibition.title.rendered}</a>
            </Link>
          </li>
        ))}
        </ul>
      </section>
    )
  }
};