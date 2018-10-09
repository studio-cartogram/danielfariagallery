import React from 'react';
import {StyledNewsList, StyledNewsLi, StyledNewsLink} from './styles';
import Link from '../Link';

function NewsList({news, filters}) {
  const newslistMarkup = news
    .filter((news) => {
      const {artist} = filters;
      if (!news.acf.artist[0]) {
        return false;
      }

      if (artist) {
        return news.acf.artist[0].post_title === artist;
      }

      return true;
    })
    .map((news) => {
      const artists = news.acf.artist
        ? news.acf.artist.map(
            (artist) => (artist ? artist.post_title : 'no artist'),
          )
        : [];

      return (
        <StyledNewsLi key={news.id}>
          <Link as={news.link} href={`/news/${news.slug}`} artists={artists}>
            <StyledNewsLink>{news.title.rendered}</StyledNewsLink>
          </Link>
        </StyledNewsLi>
      );
    });

  return (
    <React.Fragment>
      <StyledNewsList>{newslistMarkup}</StyledNewsList>
    </React.Fragment>
  );
}

export default NewsList;
