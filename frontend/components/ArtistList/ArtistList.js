import React from 'react';
import Link from '../Link';
import {StyledArtistList, StyledArtistName} from './styles';
import {sortArtistByLastName} from '../../utilities';
class ArtistList extends React.Component {
  render() {
    const {artists} = this.props;
    const sortedArtists = sortArtistByLastName(artists, 'name');

    const artistlistMarkup = sortedArtists.map((artist) => {
      return (
        <StyledArtistName key={artist.id}>
          <Link
            variant="primary"
            as={`/artist/${artist.slug}`}
            href={`/artist?slug=${artist.slug}`}
            onMouseOver={this.onArtistHover(artist)}
          >
            {artist.name}
          </Link>
        </StyledArtistName>
      );
    });
    return (
      <React.Fragment>
        <StyledArtistList>{artistlistMarkup}</StyledArtistList>
      </React.Fragment>
    );
  }

  onArtistHover = (artist) => {
    return () => {
      this.props.onArtistHover(artist);
    };
  };
}
export default ArtistList;
