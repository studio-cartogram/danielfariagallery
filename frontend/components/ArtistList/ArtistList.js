import React from 'react';
import Link from '../Link';
import {StyledArtistList, StyledArtistName} from './styles';

class ArtistList extends React.Component {
  render() {
    const {artists} = this.props;
    const sortedArtists = sortArtistByLastName(artists);

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

function sortArtistByLastName(artists) {
  artists.sort((a, b) => {
    const aName = a.name.split(' ');
    const bName = b.name.split(' ');
    const aLastName = aName[aName.length - 1];
    const bLastName = bName[bName.length - 1];

    if (aLastName < bLastName) {
      return -1;
    }
    if (aLastName > bLastName) {
      return 1;
    }
    return 0;
  });

  return artists;
}

// //split the names as strings into arrays

// // get the last names by selecting
// // the last element in the name arrays
// // using array.length - 1 since full names
// // may also have a middle name or initial

// // compare the names and return either
// // a negative number, positive number
// // or zero.
