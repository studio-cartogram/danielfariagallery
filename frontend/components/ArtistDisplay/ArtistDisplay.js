import React from 'react';
import Image from '../Image';
import {getFeaturedImage} from '../../utilities';
import {StyledArtistDisplay} from './styles';

function ArtistDisplay({artists, filter}) {
  const filteredArtists = artists.filter((artist) => artist.slug === filter);
  const currentArtist =
    filteredArtists.length === 0 ? artists[0] : filteredArtists[0];

  const image = getFeaturedImage(currentArtist, 'full');

  return (
    <StyledArtistDisplay>
      <Image src={image} />
    </StyledArtistDisplay>
  );
}
export default ArtistDisplay;
