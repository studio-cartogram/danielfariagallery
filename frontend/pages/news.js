import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import News from '../components/News';

const endpoint = `${config.apiUrl}/wp-json/wp/v2/news?_embed`;

class NewsIndex extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const news = this.props.data;
    const NewslistMarkup = news.map((news) => {
      return (
        <li key={news.id}>
          <News
            slug={news.slug}
            url={`/news/${news.slug}`}
            title={news.title.rendered}
          />
        </li>
      );
    });
    return <ul>{NewslistMarkup}</ul>;
  }
}

export default withLayout(NewsIndex);
