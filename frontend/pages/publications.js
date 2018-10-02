import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import Publication from '../components/Publication';

const endpoint = `${config.apiUrl}/wp-json/wp/v2/publications?_embed`;

class PublicationIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const publications = this.props.data;
    const publicationlistMarkup = publications.map((publication) => {
      const image =
        publication._embedded['wp:featuredmedia'][0].media_details.sizes
          .img_thumbnail.source_url;
      return (
        <li key={publication.id}>
          <Publication
            slug={publication.slug}
            url={`/publication/${publication.slug}`}
            title={publication.title.rendered}
            publicationImage={image}
          />
        </li>
      );
    });
    return <ul>{publicationlistMarkup}</ul>;
  }
}

export default withLayout(PublicationIndex);
