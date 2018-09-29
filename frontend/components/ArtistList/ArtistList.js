import React from 'react';
import Link from '../Link';
import {StyledArtistList, StyledArtistName, StyledArtistText} from './styles';
import {compareLastNames} from '../../utilities';

class ArtistList extends React.Component {
  render() {
    const {artists} = this.props;
    const sortedArtists = sortArtistByLastName(artists);

    const artistlistMarkup = sortedArtists.map((artist) => {
      return (
        <StyledArtistName>
          <Link
            slug={artist.slug}
            as={`/artist/${artist.slug}`}
            key={artist.id}
            href={artist.link}
            onMouseOver={this.onArtistHover(artist)}
          >
            <StyledArtistText>{artist.title.rendered}</StyledArtistText>
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
    console.log(a, b);
    const aName = a.title.rendered.split(' ');
    const bName = b.title.rendered.split(' ');
    const aLastName = aName[aName.length - 1];
    const bLastName = bName[bName.length - 1];

    console.log(aName, aLastName);
    console.log(bName, bLastName);

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
