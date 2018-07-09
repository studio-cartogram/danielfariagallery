import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import Exhibition from '../components/Exhibition';

const endpoint = `${config.apiUrl}/wp-json/wp/v2/exhibitions?_embed`;

class ExhibitionIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const exhibitions = this.props.data;
    const exhibitionlistMarkup = exhibitions.map((exhibition) => {
      const image =
        exhibition._embedded['wp:featuredmedia'][0].media_details.sizes.large
          .source_url;
      return (
        <li key={exhibition.id}>
          <Exhibition
            url={exhibition.link}
            title={exhibition.title.rendered}
            exhibitionImage={image}
          />
        </li>
      );
    });
    return <ul>{exhibitionlistMarkup}</ul>;
  }
}

export default withLayout(ExhibitionIndex);
