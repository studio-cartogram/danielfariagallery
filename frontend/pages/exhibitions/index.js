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

import {
  getCurrentExhibition,
  getUpcomingExhibition,
  getPastExhibitions,
  getYearFromDateString,
  isEquivalent,
} from '../../utilities';
import {commaListsAnd} from 'common-tags';

const artistEndpoint = `${
  config.apiUrl
}/wp-json/wp/v2/artists?per_page=100&_embed=true`;

const exhibitionEndpoint = `${
  config.apiUrl
}/wp-json/wp/v2/exhibitions?per_page=100&_embed=true`;

class ExhibitionIndex extends React.Component {
  state = {
    open: undefined,
    filters: {
      artist: this.props.router.query.artist,
      year: this.props.router.query.year,
    },
  };

  static async getInitialProps(ctx) {
    const [exhibitionData, artistData] = await Promise.all([
      cachedFetch(exhibitionEndpoint),
      cachedFetch(artistEndpoint),
    ]);

    const isServer = !!ctx.req;
    return {exhibitionData, artistData, isServer};
  }

  componentDidMount() {
    if (this.props.isServer) {
      overrideCache(exhibitionEndpoint, this.props.exhibitionData);
      overrideCache(artistEndpoint, this.props.artistData);
    }
  }

  render() {
    if (!this.props.exhibitionData || !this.props.artistData) {
      return null;
    }
    const {exhibitionData: exhibitions, artistData: artists} = this.props;
    const {filters, open} = this.state;
    const {asPath} = this.props.router;

    const currentPage = getCurrentPageFromPath(asPath);

    console.log(currentPage);

    if (!exhibitions.length) {
      return null;
    }

    const exhibitionYears = exhibitions.map((exhibition) => {
      return getYearFromDateString(exhibition.acf.start_date);
    });

    const exhibitionArtists = artists.map((artist) => {
      if (!artist.acf.representation) {
        return;
      }

      return artist.title.rendered;
    });

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

    const artistsToShow = exhibitionsToShow[0].acf.artist
      ? exhibitionsToShow[0].acf.artist.map(
          (artist) => (artist ? artist.post_title : 'no artist'),
        )
      : [];

    const title = exhibitionsToShow[0].title.rendered;

    const displayTitle =
      artistsToShow && artistsToShow.length
        ? commaListsAnd`${artistsToShow}: <em>${title}</em>`
        : title;
    const pageMarkup =
      currentPage === 'current' || currentPage === 'upcoming' ? (
        <ExhibitionSingle
          title={displayTitle}
          slug={exhibitionsToShow[0].slug}
          startDate={exhibitionsToShow[0].acf.start_date}
          endDate={exhibitionsToShow[0].acf.end_date}
          opening={exhibitionsToShow[0].acf.opening_reception}
          content={exhibitionsToShow[0].content.rendered}
          works={exhibitionsToShow[0].acf.work}
          current={currentPage === 'current' || currentPage === 'upcoming'}
        />
      ) : (
        <ExhibitionList exhibitions={exhibitionsToShow} filters={filters} />
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
