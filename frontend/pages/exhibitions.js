import fetch from 'isomorphic-unfetch';
import React, {Component} from 'react';
import {config} from '../config';
import withLayout from '../decorators/withLayout';
import ExhibitionList from '../components/ExhibitionList';
import FilterControl from '../components/FilterControl';

const endpoint = `${
  config.apiUrl
}/wp-json/wp/v2/exhibitions?per_page=100&_embed=true`;

class ExhibitionIndex extends Component {
  state = {
    filters: [],
  };

  static async getInitialProps() {
    const res = await fetch(endpoint);
    const data = await res.json();
    return {data};
  }

  render() {
    const exhibitions = this.props.data;
    const {filters} = this.state;

    if (!exhibitions.length) {
      return null;
    }

    const exhibitionYears = exhibitions.map((exhibition) => {
      return getYearFromDateString(exhibition.acf.start_date);
    });

    const exhibitionArtists = exhibitions.map((exhibition) => {
      return exhibition.acf.artist[0].post_title;
    });

    return (
      <React.Fragment>
        <FilterControl
          onItemClick={this.handleFilterClick}
          label={'All Years'}
          items={exhibitionYears}
        />
        <FilterControl
          onItemClick={this.handleFilterClick}
          label={'All Artists'}
          items={exhibitionArtists}
        />
        <ExhibitionList exhibitions={exhibitions} filters={filters} />
      </React.Fragment>
    );
  }

  handleFilterClick = (item) => {
    return () => {
      if (item === null) {
        return this.setState({
          filters: [],
        });
      }
      return this.setState({
        filters: [item],
      });
    };
  };
}

export function getYearFromDateString(date) {
  return date.substr(-4);
}

export default withLayout(ExhibitionIndex);
