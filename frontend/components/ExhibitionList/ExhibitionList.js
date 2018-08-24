import {StyledExhibitionList, StyledExhibitionLi} from './styles';
import React, {Component} from 'react';
import Exhibition from '../Exhibition';
import FilterControl from '../FilterControl';
import {getYearFromDateString} from '../../pages/exhibitions';

function ExhibitionList({exhibitions, filters}) {
  const exhibitionlistMarkup = exhibitions
    .filter((exhibition) => {
      return (
        filters.length === 0 ||
        getYearFromDateString(exhibition.acf.start_date) === filters[0] ||
        exhibition.acf.artist[0].post_title === filters[0]
      );
    })
    .map((exhibition) => {
      const image = exhibition._embedded
        ? exhibition._embedded['wp:featuredmedia'][0].media_details.sizes.large
            .source_url
        : null;

      return (
        <StyledExhibitionLi key={exhibition.id}>
          <Exhibition
            url={`/exhibition/${exhibition.slug}`}
            title={exhibition.title.rendered}
            exhibitionImage={image}
            artist={exhibition.acf.artist[0].post_title}
            startdate={exhibition.acf.start_date}
            enddate={exhibition.acf.end_date}
          />
        </StyledExhibitionLi>
      );
    });

  return (
    <React.Fragment>
      <p>Current Filter: {filters.join(', ')}</p>
      <StyledExhibitionList>{exhibitionlistMarkup}</StyledExhibitionList>
    </React.Fragment>
  );
}

export default ExhibitionList;
