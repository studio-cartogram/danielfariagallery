import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import NewsList from '../components/NewsList';
import FilterControl from '../components/FilterControl';
import PageNav from '../components/PageNav';
import {isEquivalent} from '../utilities';

const endpoint = `${config.apiUrl}/wp-json/wp/v2/news?per_page=100&_embed=true`;

class NewsIndex extends Component {
  state = {
    open: undefined,
    filters: {
      artist: this.props.url.query.artist,
    },
  };

  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const news = this.props.data;
    const {filters, open} = this.state;
    const {asPath} = this.props.url;

    const newsArtists = news.map((news) => {
      if (!news.acf.artist[0]) {
        return;
      }
      return news.acf.artist[0].post_title;
    });

    const navigationMarkup = (
      <React.Fragment>
        <FilterControl
          open={open === 'artist'}
          onItemClick={this.handleFilterClick}
          label={'All Artists'}
          selected={filters.artist}
          items={newsArtists}
          filterKey="artist"
        />
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <PageNav>{navigationMarkup}</PageNav>
        <NewsList news={news} filters={filters} />
      </React.Fragment>
    );
  }

  handleFilterClick = (key, item) => {
    if (!item && !key) {
      return () => {
        return this.setState((state) => ({
          open: undefined,
        }));
      };
    }
    return () => {
      return this.setState(
        (state) => ({
          filters: Object.assign(this.state.filters, {
            [key]: item,
          }),
          open: state.open ? undefined : key,
        }),
        () => {
          const {artist} = this.state.filters;
          const query = {};

          if (artist) {
            query.artist = artist;
          }

          if (isEquivalent(this.props.url.query, query)) {
            return;
          }
        },
      );
    };
  };
}

export default withLayout(NewsIndex);
