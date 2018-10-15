import React from 'react';
import {StyledFairList, StyledFairLi} from './styles';
import Fair from '../Fair';
import {getFeaturedImage} from '../../utilities';

function FairList({fairs}) {
  const fairlistMarkup = fairs.map((fair) => {
    const image = getFeaturedImage(fair);

    const artists = fair.acf.artist
      ? fair.acf.artist.map(
          (artist) => (artist ? artist.post_title : 'no artist'),
        )
      : [];

    return (
      <StyledFairLi key={fair.id}>
        <Fair
          slug={fair.slug}
          url={`/fair/${fair.slug}`}
          title={fair.title.rendered}
          fairImage={image}
          artists={artists}
          startdate={fair.acf.start_date}
          enddate={fair.acf.end_date}
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
