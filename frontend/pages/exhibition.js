import React from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import ExhibitionSingle from '../components/ExhibitionSingle';
import Error from '../components/Error';

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
    if (!exhibition) {
      return <Error />;
    }

    if (!exhibition.acf.artist[0]) {
      console.log(exhibition);
      return;
    }
    return (
      <ExhibitionSingle
        title={`${exhibition.acf.artist[0].post_title}: ${
          exhibition.title.rendered
        }`}
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
