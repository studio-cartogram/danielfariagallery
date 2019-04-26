import React from 'react';
import {StyledExhibitionList, StyledExhibitionLi} from './styles';
import Exhibition from '../Exhibition';
import Empty from '../Empty';
import {getYearFromDateString} from '../../utilities';

function ExhibitionList({exhibitions, filters}) {
  const exhibitionsToShow = exhibitions.filter((exhibition) => {
    const {artist, year} = filters;

    if (!exhibition.artists[0]) {
      return false;
    }

    if (artist && year) {
      return (
        artistIsInExhibtionArtists(exhibition.artists, artist) &&
        getYearFromDateString(exhibition.start_date) === year
      );
    }

    if (artist) {
      return artistIsInExhibtionArtists(exhibition.artists, artist);
    }

    if (year) {
      return getYearFromDateString(exhibition.start_date) === year;
    }

    return true;
  });

  if (exhibitionsToShow.length === 0) {
    return <Empty type="exhibitions" />;
  }

  const exhibitionlistMarkup = exhibitionsToShow.map((exhibition) => {
    const image = exhibition.featuredImage;

    const artists = exhibition.artists
      ? exhibition.artists.map((artist) => (artist ? artist.name : 'no artist'))
      : [];

    return (
      <StyledExhibitionLi key={exhibition.id}>
        <Exhibition
          slug={exhibition.slug}
          url={`/exhibition/${exhibition.slug}`}
          title={exhibition.title}
          exhibitionImage={image}
          artists={artists}
          startdate={exhibition.start_date}
          enddate={exhibition.end_date}
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

function artistIsInExhibtionArtists(artists, artist) {
  return artists.map((artist) => artist.name).includes(artist);
}

export default ExhibitionList;
