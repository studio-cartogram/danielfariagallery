import React from 'react';
import {StyledPublicationList, StyledPublicationLi} from './styles';
import Publication from '../Publication';
import {getFeaturedImage} from '../../utilities';

function PublicationList({publications}) {
  const publicationlistMarkup = publications.map((publication) => {
    const image = getFeaturedImage(publication);

    const artists = publication.acf.artist
      ? publication.acf.artist.map(
          (artist) => (artist ? artist.post_title : 'no artist'),
        )
      : [];

    return (
      <StyledPublicationLi key={publication.id}>
        <Publication
          slug={publication.slug}
          url={`/publication/${publication.slug}`}
          title={publication.title.rendered}
          publicationImage={image}
          artists={artists}
          startdate={publication.acf.start_date}
          enddate={publication.acf.end_date}
        />
      </StyledPublicationLi>
    );
  });

  return (
    <React.Fragment>
      <StyledPublicationList>{publicationlistMarkup}</StyledPublicationList>
    </React.Fragment>
  );
}

export default PublicationList;
