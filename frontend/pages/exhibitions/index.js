import {withRouter} from 'next/router';
import React from 'react';
import {config} from '../../config';
import withLayout from '../../decorators/withLayout';
import ExhibitionList from '../../components/ExhibitionList';
import PageNav from '../../components/PageNav';
import FilterControl from '../../components/FilterControl';
import ExhibitionSingle from '../../components/ExhibitionSingle';
import Error from '../../components/Error';
import cachedFetch, {overrideCache} from '../../utilities/cached-fetch';
import {sortArtistByLastName} from '../../utilities';

import {
  getCurrentExhibition,
  getUpcomingExhibition,
  getPastExhibitions,
  getYearFromDateString,
  isEquivalent,
} from '../../utilities';
import {commaListsAnd} from 'common-tags';

const exhibitionEndpoint = `${config.apiUrl}/wp-json/dfg/v1/exhibitions`;

class ExhibitionIndex extends React.Component {
  state = {
    open: undefined,
    filters: {
      artist: this.props.router.query.artist,
      year: this.props.router.query.year,
    },
  };

  static async getInitialProps(ctx) {
    const [data] = await Promise.all([cachedFetch(exhibitionEndpoint)]);

    const isServer = !!ctx.req;
    return {data, isServer};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(exhibitionEndpoint, this.props.data);
    }
  }

  render() {
    if (!this.props.data) {
      return null;
    }
    const {artists, exhibitions} = this.props.data;
    const {filters, open} = this.state;
    const {pathname} = this.props.router;

    const currentPage = getCurrentPageFromPath(pathname);

    if (!exhibitions.length) {
      return null;
    }

    const exhibitionYears = exhibitions.map((exhibition) => {
      return getYearFromDateString(exhibition.start_date);
    });

    const exhibitionArtists = sortArtistByLastName(
      artists.map((artist) => {
        if (!artist.representation) {
          return;
        }

        return artist.name;
      }),
    );

    let exhibitionsToShow;

    const upcomingExhibitionsToShow = getUpcomingExhibition(exhibitions);

    switch (currentPage) {
      case 'current':
        exhibitionsToShow = getCurrentExhibition(exhibitions);
        break;
      case 'past':
        exhibitionsToShow = getPastExhibitions(exhibitions);
        break;
      case 'upcoming':
        exhibitionsToShow = upcomingExhibitionsToShow;
        break;
      default:
        exhibitionsToShow = getCurrentExhibition(exhibitions);
    }

    if (exhibitionsToShow.length === 0) {
      return (
        <Error
          type="empty"
          message="No exhibitions to show. Likely this means there is no current exhibitions"
        />
      );
    }

    const artistsToShow = exhibitionsToShow[0].artists
      ? exhibitionsToShow[0].artists.map(
          (artist) => (artist ? artist.name : 'no artist'),
        )
      : [];

    const title = exhibitionsToShow[0].title;

    const displayTitle =
      artistsToShow && artistsToShow.length
        ? commaListsAnd`${artistsToShow}: <em>${title}</em>`
        : title;

    const pageMarkup =
      exhibitionsToShow.length > 1 ? (
        <ExhibitionList exhibitions={exhibitionsToShow} filters={filters} />
      ) : (
        <ExhibitionSingle
          title={displayTitle}
          slug={exhibitionsToShow[0].slug}
          startDate={exhibitionsToShow[0].start_date}
          endDate={exhibitionsToShow[0].end_date}
          opening={exhibitionsToShow[0].opening_reception}
          content={exhibitionsToShow[0].content}
          works={exhibitionsToShow[0].works}
          current={currentPage === 'current' || currentPage === 'upcoming'}
        />
      );

    const navigationMarkup =
      currentPage === 'current' || currentPage === 'upcoming' ? null : (
        <React.Fragment>
          <FilterControl
            open={open === 'year'}
            onItemClick={this.handleFilterClick}
            label={'All Years'}
            selected={filters.year}
            items={exhibitionYears}
            filterKey="year"
          />
          <FilterControl
            open={open === 'artist'}
            onItemClick={this.handleFilterClick}
            label={'All Artists'}
            selected={filters.artist}
            items={exhibitionArtists}
            filterKey="artist"
          />
        </React.Fragment>
      );

    const upcomingLinkMarkup =
      upcomingExhibitionsToShow.length > 0 ? (
        <FilterControl
          label="Upcoming"
          current={currentPage === 'upcoming'}
          href={'/exhibitions/upcoming'}
        />
      ) : null;

    return (
      <React.Fragment>
        <PageNav>
          <FilterControl
            label="Current"
            current={currentPage === 'current'}
            href={'/exhibitions'}
          />
          {upcomingLinkMarkup}
          <FilterControl
            label="Past"
            current={currentPage === 'past'}
            href={'/exhibitions/past'}
          />
          {navigationMarkup}
        </PageNav>
        {pageMarkup}
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
          const {artist, year} = this.state.filters;
          const query = {};

          if (artist) {
            query.artist = artist;
          }

          if (year) {
            query.year = year;
          }

          if (isEquivalent(this.props.router.query, query)) {
            return;
          }

          this.props.router.push({
            pathname: '/exhibitions/past',
            query,
          });
        },
      );
    };
  };
}

export default withRouter(withLayout(ExhibitionIndex));

function getCurrentPageFromPath(path) {
  const pathParts = path.split('/');
  const lastPart = pathParts[pathParts.length - 1];
  const result = lastPart === 'exhibitions' ? 'current' : lastPart;
  return result;
}
