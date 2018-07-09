import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import Fair from '../components/Fair';

const endpoint = `${config.apiUrl}/wp-json/wp/v2/fairs?_embed`;

class FairIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const fairs = this.props.data;
    const fairlistMarkup = fairs.map((fair) => {
      const image =
        fair._embedded['wp:featuredmedia'][0].media_details.sizes.large
          .source_url;
      return (
        <li key={fair.id}>
          <Fair url={fair.link} title={fair.title.rendered} FairImage={image} />
        </li>
      );
    });
    return <ul>{fairlistMarkup}</ul>;
  }
}

export default withLayout(FairIndex);
