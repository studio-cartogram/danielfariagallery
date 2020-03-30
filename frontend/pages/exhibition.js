import React from 'react';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import ExhibitionSingle from '../components/ExhibitionSingle';
import Error from '../components/Error';
import {commaListsAnd} from 'common-tags';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${config.apiUrl}/wp-json/dfg/v1/exhibitions`;

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

    const exhibition = this.props.data.exhibitions.filter(
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

    const artists = exhibition.artists
      ? exhibition.artists.map((artist) => (artist ? artist.name : 'no artist'))
      : [];

    const title = exhibition.title;

    const displayTitle =
      artists && artists.length
        ? commaListsAnd`${artists}: <em>${title}</em>`
        : title;

    return (
      <ExhibitionSingle
        slug={exhibition.slug}
        title={displayTitle}
        startDate={exhibition.start_date}
        endDate={exhibition.end_date}
        opening={exhibition.opening_reception}
        content={exhibition.content}
        works={exhibition.works}
        featuredImage={exhibition.featuredImage}
        video={exhibition.video}
      />
    );
  }
}

export default withLayout(Exhibition);
