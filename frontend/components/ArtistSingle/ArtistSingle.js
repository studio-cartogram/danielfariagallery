import React from 'react';
import {config} from '../../config';
import PageText from '../PageText';
import PageMast from '../PageMast';
import PageThumbs from '../PageThumbs';
import Thumbnail from '../Thumbnail';
import Title from '../Title';
import Column from '../Column';
import Fetcher from '../Fetcher';
import Error from '../Error';
import PageNav from '../PageNav';
import Link from '../Link';
import ExhibitionList from '../ExhibitionList';

class ArtistSingle extends React.Component {
  state = {
    currentSection: 'work',
  };
  render() {
    const {currentSection} = this.state;
    const {title, works, content, press} = this.props;

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
            return (
              <Thumbnail
                key={work.work_image}
                url={work.work_image}
                title={work.work_title}
                image={work.work_image}
              />
            );
          });
          return <PageThumbs>{workImageMarkup}</PageThumbs>;
        case 'exhibitions':
          return (
            <PageText>
              <Fetcher
                url={`${config.apiUrl}/wp-json/wp/v2/exhibitions?per_page=100`}
              >
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
                      exhibitions={data}
                    />
                  );
                }}
              </Fetcher>
            </PageText>
          );
        case 'news':
          return (
            <PageText>
              <Fetcher url={`${config.apiUrl}/wp-json/wp/v2/news?per_page=100`}>
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
                      exhibitions={data}
                    />
                  );
                }}
              </Fetcher>
            </PageText>
          );
        case 'press':
          if (!press) {
            return null;
          }
          const pressMarkup = press.map((press) => {
            return <Link href={press.press_download}>{press.press_title}</Link>;
          });
          return <PageText>{pressMarkup}</PageText>;
      }
    }

    const subSectionMarkup = sectionMarkup(currentSection);
    return (
      <React.Fragment>
        <Column />
        <PageMast>
          <Title>
            <div dangerouslySetInnerHTML={{__html: title}} />
          </Title>
          <PageNav>
            <Link onClick={this.handleSectionChange('work')}>Work</Link>
            <Link onClick={this.handleSectionChange('cv')}>CV</Link>
            <Link onClick={this.handleSectionChange('exhibitions')}>
              Exhibitions
            </Link>
            <Link onClick={this.handleSectionChange('news')}>News</Link>
            <Link onClick={this.handleSectionChange('press')}>Press</Link>
          </PageNav>
        </PageMast>
        <Column />
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

export default ArtistSingle;
