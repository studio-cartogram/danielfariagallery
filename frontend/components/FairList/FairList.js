import React from 'react';
import {StyledFairList, StyledFairLi} from './styles';
import Fair from '../Fair';
import {getFeaturedImage} from '../../utilities';

function FairList({fairs}) {
  const fairlistMarkup = fairs.map((fair) => {
    const image = fair.featuredImage;

    const artists = fair.artist
      ? fair.artist.map((artist) => (artist ? artist.title : 'no artist'))
      : [];

    return (
      <StyledFairLi key={fair.id}>
        <Fair
          slug={fair.slug}
          url={`/fair/${fair.slug}`}
          title={fair.title}
          fairImage={image}
          artists={artists}
          startdate={fair.start_date}
          enddate={fair.end_date}
          location={fair.location}
        />
      </StyledFairLi>
    );
  });

  return (
    <React.Fragment>
      <StyledFairList>{fairlistMarkup}</StyledFairList>
    </React.Fragment>
  );
}

export default FairList;
