import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import ExhibitionSingle from '../components/ExhibitionSingle';
import Error from '../components/Error';
import {commaListsAnd} from 'common-tags';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';
import {getFeaturedImage} from '../utilities';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/exhibitions?per_page=100&_embed=true`;

class Exhibition extends React.Component {
  state = {loading: true};
  static async getInitialProps(ctx) {
    const {slug} = ctx.query;

    const data = await cachedFetch(endpoint);
    const isServer = !!ctx.req;
    return {data, endpoint, isServer, slug};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(this.props.endpoint, this.props.data);
    }

    const exhibition = this.props.data.filter(
      (exhibition) => this.props.slug === exhibition.slug,
    );

    this.setState({
      loading: false,
      exhibition: exhibition.length > 0 ? exhibition[0] : null,
    });
  }

  render() {
    const {exhibition, loading} = this.state;

    if (loading) {
      return 'loading...';
    }

    if (!exhibition) {
      return <Error />;
    }

    const artists = exhibition.acf.artist
      ? exhibition.acf.artist.map(
          (artist) => (artist ? artist.post_title : 'no artist'),
        )
      : [];

    const title = exhibition.title.rendered;

    const displayTitle =
      artists && artists.length
        ? commaListsAnd`${artists}: <em>${title}</em>`
        : title;

    const featuredImage = getFeaturedImage(exhibition, 'img_medium');

    return (
      <ExhibitionSingle
        slug={exhibition.slug}
        title={displayTitle}
        startDate={exhibition.acf.start_date}
        endDate={exhibition.acf.end_date}
        opening={exhibition.acf.opening_reception}
        content={exhibition.content.rendered}
        works={exhibition.acf.work}
        featuredImage={featuredImage}
      />
    );
  }
}

export default withLayout(Exhibition);
