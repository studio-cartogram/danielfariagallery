import {withRouter} from 'next/router';
import React from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import NewsList from '../components/NewsList';
import FilterControl from '../components/FilterControl';
import PageNav from '../components/PageNav';
import {isEquivalent, sortArtistByLastName} from '../utilities';
import cachedFetch, {overrideCache} from '../utilities/cached-fetch';

const endpoint = `${config.apiUrl}/wp-json/dfg/v1/news`;

class NewsIndex extends React.Component {
  state = {
    open: undefined,
    filters: {
      artist: this.props.router.query.artist,
    },
  };

  static async getInitialProps(ctx) {
    const data = await cachedFetch(endpoint);
    const isServer = !!ctx.req;
    return {data, isServer};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(endpoint, this.props.data);
    }
  }

  render() {
    const news = this.props.data;
    const {filters, open} = this.state;
    const newsArtists = news.reduce((acc, news) => {
      const currentNewsArtists = news.artists.map(
        (artist) => artist && artist.name,
      );

      return [...acc, ...currentNewsArtists];
    }, []);

    const sortedArtists = newsArtists && sortArtistByLastName(newsArtists);

    const navigationMarkup = (
      <React.Fragment>
        <FilterControl
          open={open === 'artist'}
          onItemClick={this.handleFilterClick}
          label={'All Artists'}
          selected={filters.artist}
          items={sortedArtists}
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

          if (isEquivalent(this.props.router.query, query)) {
            return;
          }
        },
      );
    };
  };
}

export default withRouter(withLayout(NewsIndex));
