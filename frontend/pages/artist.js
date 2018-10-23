import React from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import ArtistSingle from '../components/ArtistSingle';

class Artist extends React.Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/artists?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const artist = this.props.data[0];

    if (!artist) {
      return <Error />;
    }

    return (
      <ArtistSingle
        slug={artist.slug}
        title={artist.title.rendered}
        content={artist.content.rendered}
        works={artist.acf.work}
        exhibitions={artist.acf.exhibitions}
        press={artist.acf.press}
        news={artist.acf.news}
      />
    );
  }
}

export default withLayout(Artist);
