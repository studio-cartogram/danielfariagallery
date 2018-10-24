import React from 'react';
import fetch from 'isomorphic-unfetch';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import Error from '../components/Error';
import PublicationSingle from '../components/PublicationSingle';

class Publication extends React.Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/publications?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const publication = this.props.data[0];
    if (!publication) {
      return <Error />;
    }

    return (
      <PublicationSingle
        slug={publication.slug}
        title={publication.title.rendered}
        content={publication.content.rendered}
        works={publication.acf.work}
        startDate={publication.acf.start_date}
        endDate={publication.acf.end_date}
      />
    );
  }
}

export default withLayout(Publication);
