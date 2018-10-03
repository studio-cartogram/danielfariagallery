import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../../config';
import withLayout from '../../decorators/withLayout';
import ExhibitionList from '../../components/ExhibitionList';
import PageNav from '../../components/PageNav';
import FilterControl from '../../components/FilterControl';
import ExhibitionSingle from '../../components/ExhibitionSingle';
import Link from '../../components/Link';
import {
  getCurrentExhibition,
  getPastExhibitions,
  getYearFromDateString,
  isEquivalent,
} from '../../utilities';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/exhibitions?per_page=100&_embed=true`;

class ExhibitionIndex extends Component {
  state = {
    open: undefined,
    filters: {
      artist: this.props.url.query.artist,
      year: this.props.url.query.year,
    },
  };

  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    if (!this.props.data) {
      return null;
    }
    const exhibitions = this.props.data;
    const {filters, open} = this.state;
    const {asPath} = this.props.url;

    const onCurrent =
      asPath.split('/').length === 2 && asPath.split('/')[2] !== 'past';

    if (!exhibitions.length) {
      return null;
    }

    const exhibitionYears = exhibitions.map((exhibition) => {
      return getYearFromDateString(exhibition.acf.start_date);
    });

    const exhibitionArtists = exhibitions.map((exhibition) => {
      if (!exhibition.acf.artist[0]) {
        return;
      }
      return exhibition.acf.artist[0].post_title;
    });

    const exhibitionsToShow = onCurrent
      ? getCurrentExhibition(exhibitions)
      : getPastExhibitions(exhibitions);

    const titlePrefix = exhibitionsToShow[0].acf.artist[0]
      ? `${exhibitionsToShow[0].acf.artist[0].post_title} : `
      : '';

    const pageMarkup = onCurrent ? (
      <ExhibitionSingle
        title={`${titlePrefix}${exhibitionsToShow[0].title.rendered}`}
        startDate={exhibitionsToShow[0].acf.start_date}
        endDate={exhibitionsToShow[0].acf.end_date}
        opening={exhibitionsToShow[0].acf.opening_reception}
        content={exhibitionsToShow[0].content.rendered}
        works={exhibitionsToShow[0].acf.work}
      />
    ) : (
      <ExhibitionList exhibitions={exhibitionsToShow} filters={filters} />
    );

    const navigationMarkup = onCurrent ? null : (
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

    return (
      <React.Fragment>
        <PageNav>
          <Link href={'/exhibitions'}>Current</Link>
          <Link href={'/exhibitions/past'}>Past</Link>
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

          if (isEquivalent(this.props.url.query, query)) {
            return;
          }

          this.props.url.push({
            pathname: '/exhibitions/past',
            query,
          });
        },
      );
    };
  };
}

export default withLayout(ExhibitionIndex);
