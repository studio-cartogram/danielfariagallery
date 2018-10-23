import React from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import ExhibitionSingle from '../components/ExhibitionSingle';
import Error from '../components/Error';
import {commaListsAnd} from 'common-tags';

class Exhibition extends React.Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/exhibitions?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }
  render() {
    const exhibition = this.props.data[0];

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

    if (!exhibition) {
      return <Error />;
    }

    if (!exhibition.acf.artist[0]) {
      return;
    }

    return (
      <ExhibitionSingle
        slug={exhibition.slug}
        title={displayTitle}
        startDate={exhibition.acf.start_date}
        endDate={exhibition.acf.end_date}
        opening={exhibition.acf.opening_reception}
        content={exhibition.content.rendered}
        works={exhibition.acf.work}
      />
    );
  }
}

export default withLayout(Exhibition);
