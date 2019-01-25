import React from 'react';
import CurrentExhibition from '../components/CurrentExhibition';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import {getCurrentExhibition, getFeaturedImage} from '../utilities';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/exhibitions?per_page=100&_embed=true`;

class Index extends React.Component {
  static async getInitialProps(ctx) {
    const data = await cachedFetch(endpoint);
    const isServer = !!ctx.req;
    return {data, isServer};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(endpoint, this.props.data);
    }
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

    const titleBeginning =
      acf.artist && acf.artist.length && acf.artist[0].post_title;

    return (
      <CurrentExhibition
        slug={slug}
        url={`/exhibition/${slug}`}
        title={`${titleBeginning}: ${title.rendered}`}
        image={image}
      />
    );
  }
}

export default withLayout(Index);
