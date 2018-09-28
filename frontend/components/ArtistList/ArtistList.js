import React from 'react';

class ArtistList extends React.Component {
  render() {
    const {artists} = this.props;
    return artists.map((artist) => {
      return (
        <button key={artist.id} onMouseOver={this.onArtistHover(artist)}>
          {artist.title.rendered}
        </button>
      );
    });
  }

  onArtistHover = (artist) => {
    return () => {
      this.props.onArtistHover(artist);
    };
  };
}
export default ArtistList;
