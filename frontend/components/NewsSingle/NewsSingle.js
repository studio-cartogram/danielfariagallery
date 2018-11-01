import Link from '../../components/Link';
import PageMast from '../../components/PageMast';
import PageText from '../../components/PageText';
import Title from '../../components/Title';

import {StyledArtistLink, StyledArtistLinkList, StyledContent} from './styles';

function NewsSingle({url, slug, title, artists, content}) {
  const artistListMarkup = artists.map((artist) => {
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
    <React.Fragment>
      <div>
        <Link as="/news" href="/news">
          All news
        </Link>
      </div>
      <PageMast>
        <Title>
          <div dangerouslySetInnerHTML={{__html: title}} />
        </Title>
      </PageMast>
      <PageText>
        <StyledContent>
          <div dangerouslySetInnerHTML={{__html: content}} />
        </StyledContent>
        <StyledArtistLinkList>
          More from {artistListMarkup}
        </StyledArtistLinkList>
      </PageText>
    </React.Fragment>
  );
}

export default NewsSingle;
