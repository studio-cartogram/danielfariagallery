import React from 'react';
import {StyledExhibitionList, StyledExhibitionLi} from './styles';
import Exhibition from '../Exhibition';
import {getYearFromDateString, getFeaturedImage} from '../../utilities';

function ExhibitionList({exhibitions, filters}) {
  const exhibitionlistMarkup = exhibitions
    .filter((exhibition) => {
      const {artist, year} = filters;
      if (artist && year) {
        return (
          exhibition.acf.artist[0].post_title === artist &&
          getYearFromDateString(exhibition.acf.start_date) === year
        );
      }
      if (artist) {
        return exhibition.acf.artist[0].post_title === artist;
      }
      if (year) {
        return getYearFromDateString(exhibition.acf.start_date) === year;
      }

      return true;
    })
    .map((exhibition) => {
      const image = getFeaturedImage(exhibition);

      const artists = exhibition.acf.artist.map((artist) => artist.post_title);

      return (
        <StyledExhibitionLi key={exhibition.id}>
          <Exhibition
            slug={exhibition.slug}
            url={`/exhibition/${exhibition.slug}`}
            title={exhibition.title.rendered}
            exhibitionImage={image}
            artists={artists}
            startdate={exhibition.acf.start_date}
            enddate={exhibition.acf.end_date}
          />
        </StyledExhibitionLi>
      );
    });

  return (
    <React.Fragment>
      <StyledExhibitionList>{exhibitionlistMarkup}</StyledExhibitionList>
    </React.Fragment>
  );
}

export default ExhibitionList;
