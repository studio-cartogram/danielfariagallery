import Layout from '../components/Layout';
import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper.js';
import Menu from '../components/Menu/Menu.js';
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
    const imageFeature = currentExhibition._embedded;
    if (!currentExhibition) {
      return null;
    }
    return (
      console.log(currentExhibition),
      (
        <CurrentExhibition
          url={`/exhibition/${currentExhibition.post_name}`}
          title={currentExhibition.post_title}
          image={currentExhibition.acf.thumbnail}
        />
      )
    );
  }
}

function getCurrentExhibitionFromData(data) {
  return data.acf.current_exhibition[0];
}

export default withLayout(Index);
