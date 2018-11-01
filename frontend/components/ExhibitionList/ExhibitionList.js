import React from 'react';
import {StyledExhibitionList, StyledExhibitionLi} from './styles';
import Exhibition from '../Exhibition';
import Empty from '../Empty';
import {getYearFromDateString, getFeaturedImage} from '../../utilities';

function ExhibitionList({exhibitions, filters}) {
  const exhibitionsToShow = exhibitions.filter((exhibition) => {
    const {artist, year} = filters;
    if (!exhibition.acf.artist[0]) {
      return false;
    }

    if (artist && year) {
      return (
        artistIsInExhibtionArtists(exhibition.acf.artist, artist) &&
        getYearFromDateString(exhibition.acf.start_date) === year
      );
    }

    if (artist) {
      return artistIsInExhibtionArtists(exhibition.acf.artist, artist);
    }

    if (year) {
      return getYearFromDateString(exhibition.acf.start_date) === year;
    }

    return true;
  });

  if (exhibitionsToShow.length === 0) {
    return <Empty />;
  }

  const exhibitionlistMarkup = exhibitionsToShow.map((exhibition) => {
    const image = getFeaturedImage(exhibition, 'img_medium');

    const artists = exhibition.acf.artist
      ? exhibition.acf.artist.map(
          (artist) => (artist ? artist.post_title : 'no artist'),
        )
      : [];

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

function artistIsInExhibtionArtists(artists, artist) {
  return artists.map((artist) => artist.post_title).includes(artist);
}

export default ExhibitionList;
