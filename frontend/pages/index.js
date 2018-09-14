import Layout from '../components/Layout';
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import CurrentExhibition from '../components/CurrentExhibition';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';

const PAGE_ID = 143;
const endpoint = `${config.apiUrl}/wp-json/wp/v2/pages/${PAGE_ID}`;

class Index extends Component {
  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const currentExhibition = getCurrentExhibitionFromData(this.props.data);
    if (!currentExhibition) {
      return null;
    }

    const {post_name, post_title, acf} = currentExhibition;

    if (!acf) {
      return null;
    }
    const {thumbnail} = acf;

    return (
      <CurrentExhibition
        url={`/exhibition/${post_name}`}
        title={post_title}
        image={thumbnail}
      />
    );
  }
}

function getCurrentExhibitionFromData(data) {
  return data.acf.current_exhibition[0];
}

export default withLayout(Index);
