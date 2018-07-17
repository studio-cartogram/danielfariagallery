import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';
import PageText from '../components/PageText';
import PageMast from '../components/PageMast';
import PageThumbs from '../components/PageThumbs';
import Thumbnail from '../components/Thumbnail';
import Column from '../components/Column';

class Exhibition extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query;
    const endpoint = `${config.apiUrl}/wp-json/wp/v2/${apiRoute}?slug=${slug}`;
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }
  render() {
    const exhibition = this.props.data[0];
    const workimageMarkup = exhibition.acf.work.map((work) => {
      return (
        <Thumbnail
          url={work.work_image}
          title={work.work_title}
          image={work.work_image}
        />
      );
    });
    return (
      <React.Fragment>
        <Column />
        <PageMast>
          <h1>
            {exhibition.acf.artist[0].post_title}: {exhibition.title.rendered}
          </h1>
          <p>
            {exhibition.acf.start_date} - {exhibition.acf.end_date}
          </p>
          <p>Opening reception: {exhibition.acf.opening_reception}</p>
        </PageMast>
        <Column />
        <PageText>{exhibition.content.rendered}</PageText>
        <PageThumbs>{workimageMarkup}</PageThumbs>
      </React.Fragment>
    );
  }
}

export default withLayout(Exhibition);
