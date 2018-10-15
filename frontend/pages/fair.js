import React from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import FairSingle from '../components/FairSingle';

class Fair extends React.Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/fairs?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const fair = this.props.data[0];
    if (!fair) {
      return <Error />;
    }

    return (
      <FairSingle
        title={fair.title.rendered}
        content={fair.content.rendered}
        works={fair.acf.work}
        startDate={fair.acf.start_date}
        endDate={fair.acf.end_date}
      />
    );
  }
}

export default withLayout(Fair);
