import React from 'react';
import {config} from '../../config';
import {withRouter} from 'next/router';
import PageText from '../PageText';
import PageMast from '../PageMast';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Fetcher from '../Fetcher';
import Empty from '../Empty';
import Error from '../Error';
import PageNav from '../PageNav';
import Link from '../Link';
import ExhibitionList from '../ExhibitionList';
import NewsList from '../NewsList';
import Modal from '../../components/Modal';
import {getFileNameFromPath} from '../../utilities';

class ArtistSingle extends React.Component {
  state = {
    currentSection: 'work',
  };

  render() {
    const {currentSection} = this.state;
    const {title, works, content, press, slug} = this.props;

    function sectionMarkup(currentSection) {
      switch (currentSection) {
        case 'cv':
          return (
            <PageText>
              <div dangerouslySetInnerHTML={{__html: content}} />
            </PageText>
          );
        case 'work':
          if (!works) {
            return null;
          }
          const workImageMarkup = works.map((work) => {
            const id = getFileNameFromPath(
              work.image.large || work.image.medium,
            );
            const href = `/artist?slug=${slug}&id=${id}`;
            const as = `/artist/${slug}?id=${id}`;
            return (
              <Thumbnail
                key={id}
                id={id}
                as={as}
                href={href}
                title={work.title}
                image={work.image.large || work.image.medium}
              />
            );
          });
          return <>{workImageMarkup}</>;
        case 'exhibitions':
          return (
            <>
              <Fetcher url={`${config.apiUrl}/wp-json/dfg/v1/exhibitions`}>
                {({loading, data, error}) => {
                  if (error) {
                    return <Error />;
                  }
                  if (loading) {
                    return 'loading';
                  }
                  return (
                    <ExhibitionList
                      filters={{artist: title}}
                      exhibitions={
                        Array.isArray(data) ? data : data.exhibitions
                      }
                    />
                  );
                }}
              </Fetcher>
            </>
          );
        case 'news':
          return (
            <>
              <Fetcher url={`${config.apiUrl}/wp-json/dfg/v1/news`}>
                {({loading, data, error}) => {
                  if (error) {
                    return <Error />;
                  }
                  if (loading) {
                    return 'loading';
                  }

                  return (
                    <NewsList
                      filters={{artist: title}}
                      news={Array.isArray(data) ? data : data.exhibitions}
                    />
                  );
                }}
              </Fetcher>
            </>
          );
        case 'press':
          if (!press) {
            return null;
          }
          const pressMarkup = press.map((press) => {
            return (
              <li key={press.title}>
                <p>
                  <Link href={press.download === false ? '' : press.download}>
                    {press.title}
                  </Link>
                </p>
              </li>
            );
          });
          return (
            <PageText>
              <ul>{pressMarkup}</ul>
            </PageText>
          );
      }
    }

    const subSectionMarkup = sectionMarkup(currentSection);
    return (
      <React.Fragment>
        <Modal current collection={works} />
        <div>
          <Link as="/artists" href="/artists">
            All artists
          </Link>
        </div>
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: title}} />
          </Title>
          <PageNav>
            <Link
              current={currentSection === 'work'}
              onClick={this.handleSectionChange('work')}
            >
              Work
            </Link>
            <Link
              current={currentSection === 'cv'}
              onClick={this.handleSectionChange('cv')}
            >
              CV
            </Link>
            <Link
              current={currentSection === 'exhibitions'}
              onClick={this.handleSectionChange('exhibitions')}
            >
              Exhibitions
            </Link>
            <Link
              current={currentSection === 'news'}
              onClick={this.handleSectionChange('news')}
            >
              News
            </Link>
            <Link
              current={currentSection === 'press'}
              onClick={this.handleSectionChange('press')}
            >
              Press
            </Link>
          </PageNav>
        </PageMast>
        {subSectionMarkup}
      </React.Fragment>
    );
  }
  handleSectionChange = (newSection) => {
    return () => {
      this.setState({
        currentSection: newSection,
      });
    };
  };
}

export default withRouter(ArtistSingle);
