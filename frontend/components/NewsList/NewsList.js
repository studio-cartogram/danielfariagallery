import React from 'react';
import {
  StyledNewsList,
  StyledNewsLi,
  StyledNewsLink,
  StyledArtistLinkList,
  StyledArtistLink,
} from './styles';
import Link from '../Link';
import PageText from '../PageText';

function NewsList({news, filters}) {
  const {artist} = filters;
  const newsForArtist = news.filter((news) => {
    if (!news.artists[0]) {
      return false;
    }

    const artistNames = news.artists.map((artist) => artist.name);

    if (artist) {
      return artistNames.includes(artist);
    }

    return true;
  });
  if (newsForArtist.length === 0) {
    return <PageText>No news for {artist}</PageText>;
  }
  const newsListMarkup = newsForArtist.map((news) => {
    const artists = news.artists
      ? news.artists.map((artist) => (artist ? artist.name : 'no artist'))
      : [];

    const artistListMarkup = news.artists.map((artist) => {
      return (
        <StyledArtistLink key={artist.name}>
          <Link
            variant="tertiary"
            as={`/artist/${artist.slug}`}
            href={`/artist?slug=${artist.slug}`}
          >
            {artist.name}
          </Link>
        </StyledArtistLink>
      );
    });

    return (
      <StyledNewsLi key={news.id}>
        <StyledNewsLink>
          <Link
            variant="primary"
            as={`/news/${news.slug}`}
            href={`/new?slug=${news.slug}`}
            artists={artists}
          >
            <div dangerouslySetInnerHTML={{__html: news.title}} />
          </Link>
        </StyledNewsLink>
        <StyledArtistLinkList>{artistListMarkup}</StyledArtistLinkList>
      </StyledNewsLi>
    );
  });

  return (
    <React.Fragment>
      <StyledNewsList>{newsListMarkup}</StyledNewsList>
    </React.Fragment>
  );
}

export default NewsList;
