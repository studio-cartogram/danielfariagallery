import React from 'react';
import Link from '../Link';
import {StyledArtistList, StyledArtistName, StyledArtistText} from './styles';

class ArtistList extends React.Component {
  render() {
    const {artists} = this.props;
    const artistlistMarkup = artists.map((artist) => {
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
