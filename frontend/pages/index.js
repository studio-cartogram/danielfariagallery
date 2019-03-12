import React from 'react';
import CurrentExhibition from '../components/CurrentExhibition';
import {commaListsAnd} from 'common-tags';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import {getCurrentExhibition} from '../utilities';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${config.apiUrl}/wp-json/dfg/v1/exhibitions`;

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
    const currentExhibition = getCurrentExhibition(exhibitions.exhibitions);

    if (currentExhibition.length === 0) {
      return null;
    }
    const {slug, title, artists, featuredImage} = currentExhibition[0];

    const displayTitle =
      artists && artists.length
        ? commaListsAnd`${artists}: <em>${title}</em>`
        : title;

    if (currentExhibition.length === 0) {
      return null;
    }

    return (
      <CurrentExhibition
        slug={slug}
        url={`/exhibition/${slug}`}
        title={displayTitle}
        image={featuredImage}
      />
    );
  }
}

export default withLayout(Index);
