import React from 'react';
import {
  StyledNewsList,
  StyledNewsLi,
  StyledNewsLink,
  StyledArtistLinkList,
  StyledArtistLink,
} from './styles';
import Link from '../Link';

function NewsList({news, filters}) {
  const newsListMarkup = news
    .filter((news) => {
      const {artist} = filters;
      if (!news.acf.artist[0]) {
        return false;
      }

      const artistNames = news.acf.artist.map((artist) => artist.post_title);

      if (artist) {
        return artistNames.includes(artist);
      }

      return true;
    })
    .map((news) => {
      const artists = news.acf.artist
        ? news.acf.artist.map(
            (artist) => (artist ? artist.post_title : 'no artist'),
          )
        : [];

      const artistListMarkup = news.acf.artist.map((artist) => {
        return (
          <StyledArtistLink key={artist.post_name}>
            <Link
              variant="tertiary"
              as={`/artist/${artist.post_name}`}
              href={`/artist?slug=${artist.post_name}`}
            >
              {artist.post_title}
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
              <div dangerouslySetInnerHTML={{__html: news.title.rendered}} />
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
