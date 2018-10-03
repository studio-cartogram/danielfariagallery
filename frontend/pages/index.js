import Layout from '../components/Layout';
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import CurrentExhibition from '../components/CurrentExhibition';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import {getCurrentExhibition, getFeaturedImage} from '../utilities';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/exhibitions?per_page=100&_embed=true`;

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const exhibitions = this.props.data;

    const currentExhibition = getCurrentExhibition(exhibitions);

    if (currentExhibition.length === 0) {
      return null;
    }

    const {slug, title, acf} = currentExhibition[0];

    if (!acf) {
      return null;
    }
    const image = getFeaturedImage(currentExhibition[0], 'full');

    return (
      <CurrentExhibition
        slug={slug}
        url={`/exhibition/${slug}`}
        title={`${acf.artist[0].post_title}: ${title.rendered}`}
        image={image}
      />
    );
  }
}

export default withLayout(Index);
